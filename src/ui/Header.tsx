// import img from '/images/img.png'

import { FaWallet } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";


const Header = ({ setModal, connectClick, selectedConnector, handleConnectWallet, connectors, handleDisconnect, address }: { setModal: any, connectClick: any, selectedConnector: any, connectors: any, handleDisconnect: any, address: any, handleConnectWallet: any }) => {
    return (
        <div className="flex justify-end items-center w-full py-4 px-20 bg-[#010323]">
            {!selectedConnector ? (
                <div>
                    {!connectClick && <button onClick={() => { setModal(true), handleConnectWallet }} className="text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent border-[1px] border-purple-500 rounded-full px-3 py-1 flex items-center gap-2"><FaWallet className="text-xl text-blue-500" />Connect Wallet</button>}
                </div>
            ) : (
                <div className="relative group">
                    <button onClick={handleDisconnect} className=" text-white text-lg font-semibold bg-gradient-to-r from-red-800 to-purple-500 bg-clip-text text-transparent border-[1px] border-purple-500 rounded-full px-3 py-1 flex items-center gap-2"><FaWallet className="text-xl text-blue-500" />Disconnect Wallet {connectors.address}</button>
                    <span className="absolute top-10 hidden group-hover:block w-[100%] right-0 px-3 py-1 rounded-md bg-gray-500 items-center justify-center">
                        <span className="flex items-center text-sm justify-between gap-2"> <span className="text-white overflow-hidden">{address}</span><MdContentCopy className="cursor-pointer text-white text-2xl" onClick={() => { navigator.clipboard.writeText(address) }} /></span>
                    </span>
                </div>
            )}


            <div className="flex items-center gap-4">
                {/* <button className="text-white text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent border-2 border-purple-500 rounded-full px-4 py-2">
                    <img src={img} alt="" />
                </button> */}
            </div>
        </div>
    )
}

export default Header
