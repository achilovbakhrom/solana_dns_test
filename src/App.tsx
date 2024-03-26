import { useState } from 'react';
import './App.css';
import { topDomains } from './constants';
import { DnsContractUtil } from './utils/contract';
import { aliceKeyPair, bobKeyPair } from './assets/myWallets';
import { AnchorError } from '@project-serum/anchor';

const dropdown = topDomains.map((item) => ({
  value: item,
  title: `.${item}`
}))

function App() {

  const [name, setName] = useState('')
  const [extension, setExtension] = useState('solana')
  const [years, setYears] = useState('1')
  const [metadataUrl, setMetadataUrl] = useState<string | undefined>()
  const [nftTitle, setNftTitle] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [tx, setTx] = useState<string | undefined>()
  const registerDomain = async () => {
    setIsLoading(true)
    try {
      const initialized = await DnsContractUtil.isProgramInitialized()
      if (!initialized) {
        await DnsContractUtil.initDns(topDomains, aliceKeyPair)
      }
      const tx = await DnsContractUtil.registerDomain(
        `${name}.${extension}`,
        !isNaN(Number(years)) ? Number(years) : 1,
        aliceKeyPair,
        bobKeyPair,
      )
      setTx(tx)
    } catch(e) {
      const error = e as AnchorError
      const alreadyInUse = error.logs?.some((item) => item.toLowerCase().includes('already in use'))
      setError(alreadyInUse ? `${name}.${extension} is already registered` : error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="App">
      <form className='form' onSubmit={async (e) => {
        e.preventDefault()
        setError(undefined)
        setTx(undefined)
        await registerDomain()
      }}>
        <div className='name_input_container'>
          <input
            name="dns"
            placeholder='Enter Domain Name'
            className='name_input'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setError(undefined)
              setTx(undefined)
            }}
          />
          <select
            value={extension}
            onChange={(e) => {
              setExtension(e.target.value)
              setError(undefined)
              setTx(undefined)
            }}
          >
            {dropdown.map((item) => (
              <option key={item.value} value={item.value}>{item.title}</option>
            ))}
          </select>
        </div>
        <input
          name="years"
          placeholder='Registration year'
          value={years}
          onChange={(e) => {
            setYears(e.target.value)
            setError(undefined)
            setTx(undefined)
          }}
        />
        <input
          name="metadataUrl"
          placeholder='NFT MetadataUrl (Optional)'
          value={metadataUrl}
          onChange={(e) => {
            setMetadataUrl(e.target.value)
            setError(undefined)
            setTx(undefined)
          }}
        />
        <input
          name="nftTitle"
          placeholder='NFT Title (Optional)'
          value={nftTitle}
          onChange={(e) => {
            setNftTitle(e.target.value)
            setError(undefined)
            setTx(undefined)
          }}
        />
        <div>
          <button
            className='submit'
            type='submit'
            disabled={!name || !extension || isLoading}
          >
            Register
          </button>
        </div>
      </form>
      {error && <div className='error'>{ error }</div>}
      {tx && <div className='success'>
        Successfully created. Transaction is: <a target='_blank' href={`https://explorer.solana.com/tx/${tx}?cluster=devnet`} rel="noreferrer">{tx}</a>!
      </div>}
      
    </div>
  );
}

export default App;
