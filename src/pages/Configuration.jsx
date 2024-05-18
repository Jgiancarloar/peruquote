import React from 'react'
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from 'react-router-dom';
import usePeruQuoteContext from '../hooks/usePeruQuoteContext';

const Configuration = () => {

  const { data, setData, empresa, setEmpresa, empNombre, setEmpNombre, empDoi, setEmpDoi, empTelefono, setEmpTelefono } = usePeruQuoteContext();

  const addEmpresa = (e) => {
    e.preventDefault()
    setEmpresa([...empresa, {
      empNombre,
      empDoi,
      empTelefono
    }])
    setEmpNombre("")
    setEmpDoi("")
    setEmpTelefono("")

  }

  return (
    <div className='px-5'>
      <div className='flex justify-between items-center mb-5'>
        <h3 className='text-2xl font-bold'>Datos de la empresa</h3>
        <Link to={"/"}><IoIosReturnLeft size={35} /></Link>
      </div>
      <form className='grid gap-2'>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          placeholder='Ingrese el nombre de la empresa ...'
          className='py-2 px-2 text-black'
          value={empNombre}
          onChange={(e) => setEmpNombre(e.target.value)}
        />
        <label htmlFor="">D.O.I.:</label>
        <input
          type="number"
          placeholder='Ingrese RUC u otro ...'
          className='py-2 px-2 text-black'
          value={empDoi}
          onChange={(e) => setEmpDoi(e.target.value)}
        />
        <label htmlFor="">Teléfono:</label>
        <input
          type="number"
          placeholder='Ingrese su telefono de contacto'
          className='py-2 px-2 text-black'
          value={empTelefono}
          onChange={(e) => setEmpTelefono(e.target.value)}
        />
        <button className='py-2 bg-gray-400 mt-5' onClick={addEmpresa}>Guardar</button>
      </form>
    </div>
  )
}

export default Configuration