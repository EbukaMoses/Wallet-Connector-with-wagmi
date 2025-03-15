// import img from '/images/img.png'

import { FaWallet } from "react-icons/fa";

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<ButtonProps> = ({ setModal }) => {
    return (
        <div className="flex justify-end items-center w-full py-4 px-20 bg-[#010323]">
            <button onClick={() => {
                setModal(true);
            }} className="text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent border-[1px] border-purple-500 rounded-full px-3 py-1 flex items-center gap-2"><FaWallet className="text-xl text-blue-500" />Connect Wallet</button>
            <div className="flex items-center gap-4">
                {/* <button className="text-white text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent border-2 border-purple-500 rounded-full px-4 py-2">
                    <img src={img} alt="" />
                </button> */}
            </div>
        </div>
    )
}

export default Header
