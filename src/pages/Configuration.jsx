import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Configuration = () => {

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <div className="flex justify-end">
        <Link to={"/home"}>
          <IoArrowBackCircleSharp size={40} />
        </Link>
      </div>
      <h3 className="text-center font-bold text-2xl">Configuración</h3>
      <form className="grid gap-2">
        <label
          className="font-semibold"
          htmlFor="">Nombre de la empresa</label>
        <input
          className="px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text"
          placeholder="..."
        />
        <label
          className="font-semibold"
          htmlFor="">DOI de la empresa</label>
        <input
          className="px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text"
          placeholder="..."
        />
        <label
          className="font-semibold"
          htmlFor="">Telefono de la empresa</label>
        <input
          className="px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text"
          placeholder="..."
        />
        <button className="bg-[#7B5CFA] px-5 py-2 rounded-full text-white font-semibold mx-auto mt-10">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default Configuration