import { AnchorProvider, Wallet } from "@project-serum/anchor";
import {
  Cluster,
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";

export class CustomWallet implements Wallet {
  constructor(readonly payer: Keypair) {
    this.payer = payer;
  }

  async signTransaction(tx: Transaction): Promise<Transaction> {
    tx.partialSign(this.payer);
    return tx;
  }

  async signAllTransactions(txs: Transaction[]): Promise<Transaction[]> {
    return txs.map((t) => {
      t.partialSign(this.payer);
      return t;
    });
  }

  get publicKey(): PublicKey {
    return this.payer.publicKey;
  }
}

export function getConnection(cluster: Cluster): Connection {
  return new Connection(clusterApiUrl(cluster), { commitment: "confirmed" });
}

export function getProvider(
  connection: Connection,
  wallet: Keypair
): AnchorProvider {
  return new AnchorProvider(connection, new CustomWallet(wallet), {
    preflightCommitment: "processed",
  });
}

export function stringToPublic(arg: string): PublicKey {
  if (PublicKey.isOnCurve(arg)) {
    return new PublicKey(arg);
  }
  throw Error(`Public key is not valid: ${arg}`);
}
