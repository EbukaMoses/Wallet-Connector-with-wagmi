import { useEffect, useState } from 'react'
import { useAccount, useConnectors, useConnect, useDisconnect, useSwitchChain } from 'wagmi'
import { mainnet, sepolia, lisk, liskSepolia, base, polygon } from 'wagmi/chains'
import './App.css'
import img from '/images/4.png'
import icon from '/images/9.png'
import Header from './ui/Header'
import Modal from './ui/Modal'
import FloatingImage from './ui/FloatingImage'
function App() {
  const [modal, setModal] = useState(false)
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("Button clicked!", event);
  // };

  const { address, connector, isConnected, chain } = useAccount()
  const connectors = useConnectors()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { switchChain } = useSwitchChain()

  // State types: connectClick is a boolean, and connector is the current connector or null
  const [connectClick, setConnectClick] = useState<boolean>(false)
  const [selectedConnector, setSelectedConnector] = useState<any | null>(null)

  const supportedChains = [mainnet, sepolia, lisk, liskSepolia, base, polygon]

  useEffect(() => {
    //connectors is an array and it will always be true wether empty or not
    setSelectedConnector(connector)
    setConnectClick(false)
  }, [connector, address, connectors])

  const handleConnectWallet = () => {
    setConnectClick(true)
  }

  const handleConnector = (selected: any) => {
    connect({ connector: selected })
  }

  const handleDisconnect = () => {
    if (selectedConnector) {
      disconnect()
      setSelectedConnector(null)
      setConnectClick(false)
    }
  }

  const handleSwitchChain = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chainId = Number(event.target.value)
    console.log('Switching to chain ID:', chainId)
    await switchChain({ chainId })
  }

  return (
    <div className='relative bg-gradient-to-br from-[#0a0a23] to-[#122571] min-h-screen'>
      <Header setModal={setModal} handleConnectWallet={handleConnectWallet} address={address} selectedConnector={selectedConnector} connectClick={connectClick} handleDisconnect={handleDisconnect} connectors={connectors} />
      {modal && <Modal setModal={setModal} connectors={connectors} handleConnector={handleConnector} setConnectClick={setConnectClick} />}
      {!selectedConnector ? (<div className="">
        <div className=' flex justify-center  gap-10 max-w-screen-lg mx-auto py-20 px-4 lg:px-0'>
          <div className='flex flex-col w-[50%] mt-10'>
            <h1 className='text-white text-[2.7rem] leading-none mb-5 font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'> Build for Conversion <br /> Scale for your Ambition
            </h1>
            <p className='text-white text-lg '>Wallet creation in seconds - all while keeping it secure,
              non-custodial, and seed phrase-free via Multi-Party Computation (MPC) and Account Abstraction</p>
          </div>
          <div className='flex justify-center  w-full lg:w-[50%]'>
            {/* <img src={img} alt="" /> */}
            <FloatingImage url={img} className='' />
          </div>
        </div>

      </div>) : (
        <div className='flex items-center justify-center  bg-gradient-to-r from-black/20 to-transparent bg-[url("/images/bg.jpg)] bg-cover bg-center w-[70%] mx-auto rounded-lg mt-10 p-10 border-[0.5px] shadow-2xl border-white'>
          <div className="w-[60%]">
            <h1 className='text-white text-center text-[2rem] leading-none mb-5 font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Build for Conversion <br /> Scale for your Ambition</h1>
            <div className='flex flex-col justify-center gap-4'>
              <p className='px-4 py-2 bg-gradient-to-r from-[#033AC6] via-[#1d4a71] to-[#011B68] border-[0.5px] shadow-2xl border-white rounded-lg  text-white font-bold'>Address: {address}</p>
              <p className='px-4 py-2 bg-gradient-to-r from-[#033AC6] via-[#1d4a71] to-[#011B68] border-[0.5px] shadow-2xl border-white rounded-lg  text-white font-bold'>Connected: {isConnected && 'Wallet Connected'}</p>
              <p className='px-4 py-2 bg-gradient-to-r from-[#033AC6] via-[#1d4a71] to-[#011B68] border-[0.5px] shadow-2xl border-white rounded-lg  text-white font-bold'>Chain: {chain?.name}</p>

              <select className='px-4 py-2  border-[0.5px] shadow-2xl border-white rounded-lg font-bold' value={chain?.id} onChange={handleSwitchChain}>
                {supportedChains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
              {/* <button className='px-4 py-2 bg-gradient-to-r from-[#5e1c1c] via-[#713f1d] to-[#d70a0a] border-[0.5px] shadow-2xl border-white rounded-lg mb-20  text-white font-bold' onClick={handleDisconnect}>Disconnect Wallet</button> */}
            </div>
          </div>
          <div className="w-[40%] flex items-center justify-center">
            <FloatingImage url={icon} className='w-[70%]' />
          </div>

        </div>)}

    </div>

  )
}

export default App
