import React from 'react'
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from 'react-router-dom';
import ModalProduct from './ModalProduct';
import usePeruQuoteContext from '../hooks/usePeruQuoteContext';
import { MdEdit, MdDelete } from "react-icons/md";

const Generator = () => {

  const { handleModal, items } = usePeruQuoteContext();

  return (
    <div className='relative h-full'>
      <div className='flex justify-between items-center mb-5 px-5'>
        <h3 className='text-2xl font-bold'>Generador de proformas</h3>
        <Link to={"/"}><IoIosReturnLeft size={35} /></Link>
      </div>
      <button className='py-2 w-40 bg-gray-400 text-black mt-5 font-semibold mx-auto flex justify-center mb-5' onClick={handleModal}>Añadir Item</button>
      <ModalProduct />
      <div className='px-1'>
        <table className='w-full mb-5'>
          <thead className='text-sm font-semibold bg-gray-400 text-black'>
            <tr>
              <td className='text-center py-2 border-x-[1px] border-[#484848] w-1/3'>Producto</td>
              <td className='text-center py-2 border-x-[1px] border-[#484848]'>U.M.</td>
              <td className='text-center py-2 border-x-[1px] border-[#484848]'>Cant</td>
              <td className='text-center py-2 border-x-[1px] border-[#484848]'>Precio</td>
              <td className='text-center py-2 border-x-[1px] border-[#484848]'>Total</td>
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
            </tr>

            )
            )}
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
      </div>
    </div>
  )
}

export default Generator