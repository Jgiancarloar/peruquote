import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import usePeruQuoteContext from '../hooks/usePeruQuoteContext';


const ModalProduct = () => {

    const { isOpen, handleModal, items, setItems, producto, setProducto, unidad, setUnidad, cantidad, setCantidad, precio, setPrecio } = usePeruQuoteContext();

    const options = [
        { value: "", id: 1 },
        { value: "UND", id: 2 },
        { value: "KGM", id: 3 },
        { value: "BLS", id: 4 }
    ]

    const addItem = (e) => {
        e.preventDefault()
        if ([producto, unidad, cantidad, precio].includes("")) {
            alert("¡Existen campos vacios!")
            return;
        }
        setItems([...items, {
            id: window.crypto.randomUUID(),
            producto: producto.toLowerCase(),
            unidad: unidad,
            cantidad: parseFloat(cantidad).toFixed(2),
            precio: parseFloat(precio).toFixed(2)
        }])
        setProducto("")
        setUnidad("")
        setCantidad("")
        setPrecio("")
        handleModal()
    }
    return (
        <div className={`absolute h-full w-full left-0 top-0 bg-white/50 backdrop-blur-md flex flex-col justify-center items-center px-5
        ${isOpen ? "translate-y-0" : "translate-y-full"} transition-all duration-300`}>
            <div className='bg-[#242424] p-5 rounded-md flex flex-col w-full gap-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-center font-semibold text-xl'>Registro de producto</h3>
                    <button onClick={handleModal}><IoIosCloseCircleOutline size={30} /></button>
                </div>
                <form
                    onSubmit={addItem}
                    className='grid w-full gap-1'>
                    <label htmlFor="">Producto:</label>
                    <input
                        type="text"
                        placeholder='Ingrese nombre del producto'
                        className='rounded-sm px-2 py-1 text-black'
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                    />
                    <label htmlFor="">U.M.:</label>
                    <select
                        className='w-1/3 rounded-sm px-2 py-1 text-black'
                        value={unidad}
                        onChange={(e) => setUnidad(e.target.value)}
                    >
                        {
                            options.map(option => (
                                <option key={option.id}>{option.value}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="">Cantidad:</label>
                    <input
                        type="number"
                        className='w-1/3 text-right rounded-sm px-2 py-1 text-black' 
                        value={cantidad}
                        onChange={(e)=>setCantidad(e.target.value)}
                        />
                    <label htmlFor="">Precio:</label>
                    <input
                        type="number"
                        className='w-1/3 text-right rounded-sm px-2 py-1 text-black' 
                        value={precio}
                        onChange={(e)=>setPrecio(e.target.value)}
                        />
                    <button className='py-2 bg-gray-400 mt-5'>Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalProduct