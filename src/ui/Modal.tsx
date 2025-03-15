import { IoClose } from "react-icons/io5"

const Modal = ({ setModal }: { setModal: (value: boolean) => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white w-[50%] flex flex-col items-center justify-center p-8 rounded-lg shadow-lg">
                <span onClick={() => setModal(false)} className="text-lg font-bold mb-4 cursor-pointer absolute top-3 right-5"><IoClose className="text-2xl text-purple-950 font-extrabold" /></span>
                <h2 className="text-2xl font-bold mb-4">Connect Wallet</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Connect with MetaMask
                </button>
            </div>
        </div>
    )
}

export default Modal
