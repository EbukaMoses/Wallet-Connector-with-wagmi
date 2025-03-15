import { useState } from 'react'
import './App.css'
import img from '/images/4.png'
import Header from './ui/Header'
import Modal from './ui/Modal'
import FloatingImage from './ui/FloatingImage'
function App() {

  const [modal, setModal] = useState(false)


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
  };

  return (
    <div className='relative'>
      <Header onClick={handleClick} setModal={setModal} />
      {modal && <Modal setModal={setModal} />}
      <div className="bg-gradient-to-br from-[#0a0a23] to-[#122571] min-h-screen">
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

      </div>
    </div>

  )
}

export default App
