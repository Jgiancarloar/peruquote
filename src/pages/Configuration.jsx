import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Configuration = () => {

  return (
    <div className="h-screen p-5 flex flex-col gap-2">
      <div className="flex justify-end">
        <Link to={"/home"}>
          <IoArrowBackCircleSharp size={40} />
        </Link>
      </div>
      <h3 className="text-center font-bold text-2xl">Configuración</h3>
      <form className="flex flex-col gap-2 w-full">
        <label
          className="font-semibold"
          htmlFor="">Nombre de la empresa</label>
        <input
          className="w-full px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text"
          placeholder="..."
        />
        <label
          className="font-semibold"
          htmlFor="">DOI de la empresa</label>
        <input
          className="w-full px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text"
          placeholder="..."
        />
        <label
          className="font-semibold"
          htmlFor="">Telefono de la empresa</label>
        <input
          className="w-full px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text"
          placeholder="..."
        />
        <label
          className="font-semibold"
          htmlFor="">Observaciones</label>
        <textarea
        className="w-full px-2 py-1 rounded-sm outline-none resize-none bg-[#1E2139] h-24"
        ></textarea>
        <label
          className="font-semibold"
          htmlFor="">Cuentas bancarias</label>
        <textarea
        className="w-full px-2 py-1 rounded-sm outline-none resize-none bg-[#1E2139] h-40"
        ></textarea>
        <button className="bg-[#7B5CFA] px-5 py-2 rounded-full text-white font-semibold mx-auto mt-10">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default Configuration