import { Keypair, PublicKey, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import {
  CHAINLINK_FEED,
  CHAINLINK_PROGRAM_ID,
  TOKEN_METADATA_PROGRAM_ID,
} from "../constants";
import { Program, web3 } from "@project-serum/anchor";
import { Solname } from "../assets/idl";
import idl from "../assets/idl.json";
import { getConnection, getProvider } from "./solana";
import { aliceKeyPair } from "../assets/myWallets";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createInitializeMintInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token";

export class DnsContractUtil {
  private static getProgram(): Program<Solname> {
    return new Program<Solname>(
      idl as any,
      new PublicKey(idl.metadata.address),
      getProvider(getConnection("devnet"), aliceKeyPair)
    );
  }

  private static getStateAccount(): PublicKey {
    const [result] = PublicKey.findProgramAddressSync(
      [Buffer.from("dns_state")],
      new PublicKey(idl.metadata.address)
    );
    return result;
  }

  private static getDomainAccount(domainName: string): PublicKey {
    const program = this.getProgram();
    const [result] = PublicKey.findProgramAddressSync(
      [Buffer.from("domain"), Buffer.from(domainName)],
      program.programId
    );
    return result;
  }

  private static getMetadata(arg: PublicKey): PublicKey {
    const [key] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        arg.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    );

    return key;
  }

  private static getMasterEdition(arg: PublicKey): PublicKey {
    const [addr] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        arg.toBuffer(),
        Buffer.from("edition"),
      ],
      TOKEN_METADATA_PROGRAM_ID
    );

    return addr;
  }

  static async getAdminPublicKey(): Promise<PublicKey> {
    const statePda = this.getStateAccount();
    const program = await this.getProgram();
    const data = await program.account.dnsState.fetch(statePda);

    return data.admin;
  }

  static async isProgramInitialized(): Promise<boolean> {
    const statePda = this.getStateAccount();
    const program = await this.getProgram();
    const data = await program.account.dnsState.fetch(statePda);
    return data.allowedTopDomains && data.allowedTopDomains.length > 0;
  }

  static async initDns(domains: string[], signer: Keypair) {
    try {
      const statePda = this.getStateAccount();
      const program = this.getProgram();
      await program.methods
        .initDns(domains)
        .accounts({
          dnsState: statePda,
          signer: signer.publicKey,
          systemProgram: web3.SystemProgram.programId,
        })
        .signers([signer])
        .rpc();
    } catch (e) {
      console.error("initDns error: ", e);
    }
  }

  static async registerDomain(
    name: string,
    years: number,
    signer: Keypair,
    authority: Keypair,
    metadata: string = "http://metadata-url.com",
    nftTitle: string = "Mint Title"
  ): Promise<string> {
    const statePda = this.getStateAccount();
    const domainPda = this.getDomainAccount(name);
    const mintKey = Keypair.generate();

    const nftTokenAccountBob = await getAssociatedTokenAddress(
      mintKey.publicKey,
      authority.publicKey
    );

    const metadataAddress = this.getMetadata(mintKey.publicKey);
    const masterEdition = this.getMasterEdition(mintKey.publicKey);
    const program = this.getProgram();
    const lamports: number =
      await program.provider.connection.getMinimumBalanceForRentExemption(
        MINT_SIZE
      );

    const mint_tx = new web3.Transaction().add(
      web3.SystemProgram.createAccount({
        fromPubkey: signer.publicKey,
        newAccountPubkey: mintKey.publicKey,
        space: MINT_SIZE,
        programId: TOKEN_PROGRAM_ID,
        lamports,
      }),
      createInitializeMintInstruction(
        mintKey.publicKey,
        0,
        signer.publicKey,
        signer.publicKey
      ),
      createAssociatedTokenAccountInstruction(
        signer.publicKey,
        nftTokenAccountBob,
        authority.publicKey,
        mintKey.publicKey
      )
    );
    const res = await program.provider.sendAndConfirm!(mint_tx, [
      aliceKeyPair,
      mintKey,
    ]);

    console.log("res", res);
    const adminKey = await this.getAdminPublicKey();
    return await program.methods
      .registerDomain(name, years, mintKey.publicKey, metadata, nftTitle, "sol")
      .accounts({
        domain: domainPda,
        state: statePda,
        receiver: adminKey,

        chainlinkFeed: CHAINLINK_FEED,
        chainlinkProgram: CHAINLINK_PROGRAM_ID,

        receiverAta: null,
        payerAta: null,

        mintAuthority: signer.publicKey,
        mint: mintKey.publicKey,

        tokenAccount: nftTokenAccountBob,
        tokenProgram: TOKEN_PROGRAM_ID,
        metadata: metadataAddress,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        masterEdition: masterEdition,

        authority: authority.publicKey,
        rent: SYSVAR_RENT_PUBKEY,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([signer, authority])
      .rpc();
  }
}
