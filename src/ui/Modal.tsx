import { IoClose } from "react-icons/io5"
// import img from '/images/6.png'
import m1 from '/images/m1.svg'
import m2 from '/images/m2.svg'

const Modal = ({ setModal, connectors, handleConnector, setConnectClick }: { setModal: (value: boolean) => void, connectors: any, handleConnector: (event: React.MouseEvent<HTMLButtonElement>) => void, setConnectClick: (value: boolean) => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white w-[50%] flex flex-col  justify-center p-8 rounded-lg shadow-lg">
                <span onClick={() => setModal(false)} className="text-lg font-bold mb-4 cursor-pointer absolute top-3 right-5"><IoClose className="text-2xl text-purple-950 font-extrabold" /></span>
                <div className="flex">
                    <div className="w-[40%] border-r-2 border-gray-300 pr-10">
                        <h2 className="text-lg font-bold ">Connect a Wallet</h2>
                        <h6 className="text-sm text-blue-500 font-semibold mb-10">Installed</h6>

                        {/* List/map of available wallets on the browser */}
                        <div className='flex flex-col gap-6 mb-10'>
                            <div className="flex flex-col gap-2">
                                {connectors.map((connector: any) => (
                                    <button key={connector.id} onClick={() => { handleConnector(connector); setModal(false) }} className='flex items-center gap-2 px-4 py-2 hover:bg-[#e6e6e6]  hover:shadow-2xl border-white  text-black font-semibold'>
                                        <img src={connector.icon} className="w-6 h-6" alt="" />  {connector.name}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setConnectClick(false)} className='mb-24 px-4 py-2 bg-[#781515] rounded-lg  shadow-2xl  text-white font-bold'>Cancel Connect</button>
                        </div>
                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Connect with MetaMask
                        </button> */}
                    </div>
                    <div className="w-[60%] px-12 gap-20  flex flex-col items-center justify-center">
                        <div className=" flex flex-col items-center justify-center">
                            <h2 className="text-lg font-bold">What is a Wallet?</h2>
                            <div className="flex items-center gap-4 mb-10 justify-center">
                                <img src={m1} className="w-10 h-10" alt="" />
                                <div>
                                    <h4 className="text-md font-bold">A Home for your Digital Assets</h4>
                                    <p>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-center">
                                <img src={m2} className="w-10 h-10" alt="" />
                                <div>
                                    <h4 className="text-md font-bold">A New Way to Log In</h4>
                                    <p>Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
                                </div>
                            </div>
                        </div>
                        {/* <img src={img} alt="" className="w-[80%]" /> */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Get a Wallet
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal
