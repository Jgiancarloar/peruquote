import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Record = () => {



  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <div className="flex justify-end">
        <Link to={"/home"}>
          <IoArrowBackCircleSharp size={40} />
        </Link>
      </div>
      <h3 className="text-center font-bold text-2xl">Registro</h3>
      <form></form>
    </div>
  )
}

export default Record