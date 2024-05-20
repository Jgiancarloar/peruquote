import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalProduct from "./ModalProduct";
import usePeruQuoteContext from "../hooks/usePeruQuoteContext";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Record = () => {

  const { handleModal,items } = usePeruQuoteContext();

  return (
    <div className="relative h-screen p-5 flex flex-col gap-2">
      <div className="flex justify-end">
        <Link to={"/home"}>
          <IoArrowBackCircleSharp size={40} />
        </Link>
      </div>
      <h3 className="text-center font-bold text-2xl">Registro</h3>
      <form className="grid gap-1">
        <h3 className="text-xl font-semibold">Datos del cliente</h3>
        <label htmlFor="">Nombre</label>
        <input
          className="px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text" />
        <div className="flex gap-5 w-full">
          <div className="w-full">
            <label htmlFor="">Documento</label>
            <input
              className="px-2 py-1 rounded-sm outline-none w-full bg-[#1E2139]"
              type="text" />
          </div>
          <div className="w-full">
            <label htmlFor="">Telefono</label>
            <input
              className="px-2 py-1 rounded-sm outline-none w-full bg-[#1E2139]"
              type="text" />
          </div>
        </div>
        <label htmlFor="">Direccion</label>
        <input
          className="px-2 py-1 rounded-sm outline-none bg-[#1E2139]"
          type="text" />
      </form>
      <div className="flex justify-end py-5">
        <button
          onClick={handleModal}
          className="bg-[#7B5CFA] px-5 py-2 rounded-full text-white font-semibold flex items-center gap-2">
          <span>Agrega Item</span>
          <FaCirclePlus size={30} />
        </button>
      </div>
      <table>
        <thead className="text-sm">
          <tr>
            <th>Producto</th>
            <th>U.M.</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className='text-xs'>
            {items?.map(item =>
            (<tr className='uppercase' key={item.id}>
              <td className='border-b-[1px] text-left py-2 px-1'>{item.producto}</td>
              <td className='border-b-[1px] text-center py-2 px-1'>{item.unidad}</td>
              <td className='border-b-[1px] text-right py-2 px-1'>{item.cantidad}</td>
              <td className='border-b-[1px] text-right py-2 px-1'>{item.precio}</td>
              <td className='border-b-[1px] text-right py-2 px-1'>{parseFloat((item.cantidad) * (item.precio)).toFixed(2)}</td>
              <td className='py-2 pl-2'><MdEdit size={15} /></td>
              <td className='py-2'><MdDelete size={15} /></td>
            </tr>))}
          </tbody>
      </table>
      <div className='flex justify-center items-center gap-2 font-semibold uppercase'>
          <p>Monto total :</p>
          <span className='text-xl'>
            {
              parseFloat(items?.reduce(function (total, item) {
                return total + (item.cantidad * item.precio)
              }, 0)).toFixed(2)
            }
          </span>
        </div>
      <ModalProduct />
    </div>
  )
}

export default Record