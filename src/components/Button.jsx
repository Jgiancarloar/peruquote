import { FaCirclePlus } from "react-icons/fa6";
import { MdTitle } from "react-icons/md";

export const Button = ({title}) => {
  return (
    <button className="bg-[#7B5CFA] px-5 py-2 rounded-full text-white font-semibold flex items-center gap-2">
        <span>{title}</span>
        <FaCirclePlus size={30} />
    </button>
  )
}
