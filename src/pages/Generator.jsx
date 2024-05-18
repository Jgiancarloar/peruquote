import React, { useState } from 'react'
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from 'react-router-dom';
import ModalProduct from './ModalProduct';
import usePeruQuoteContext from '../hooks/usePeruQuoteContext';

const Generator = () => {

  const { handleModal, items } = usePeruQuoteContext();
  let total = 0;

  return (
    <div className='relative px-5 h-full'>
      <div className='flex justify-between items-center mb-5'>
        <h3 className='text-2xl font-bold'>Generador de proformas</h3>
        <Link to={"/"}><IoIosReturnLeft size={35} /></Link>
      </div>
      <button className='py-2 w-40 bg-gray-400 text-black mt-5 font-semibold mx-auto flex justify-center mb-5' onClick={handleModal}>Añadir Item</button>
      <ModalProduct />
      <div>
        <table className='w-full mb-5'>
          <thead className='text-sm font-semibold bg-gray-400 text-black'>
            <tr>
              <td className='text-center py-2 border-0'>Producto</td>
              <td className='text-center py-2 border-0'>U.M.</td>
              <td className='text-center py-2 border-0'>Cant</td>
              <td className='text-center py-2 border-0'>Precio</td>
              <td className='text-center py-2 border-0'>Total</td>
            </tr>
          </thead>
          <tbody className='text-xs'>
            {items?.map(item =>
            (<tr className='border-b-[1px]' key={item.id}>
              <td className='text-left py-2 px-1'>{item.producto}</td>
              <td className='text-center py-2 px-1'>{item.unidad}</td>
              <td className='text-right py-2 px-1'>{item.cantidad}</td>
              <td className='text-right py-2 px-1'>{item.precio}</td>
              <td className='text-right py-2 px-1'>{parseFloat((item.cantidad) * (item.precio)).toFixed(2)}</td>
            </tr>)
            )}
          </tbody>
        </table>
        <p className='text-right font-semibold'>Monto total: <span>
          {
            parseFloat(items?.reduce(function (total, item) {
              return total + (item.cantidad * item.precio)
            }, 0)).toFixed(2)
          }
        </span>
        </p>
      </div>
    </div>
  )
}

export default Generator