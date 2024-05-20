import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import usePeruQuoteContext from '../hooks/usePeruQuoteContext';


const ModalProduct = () => {

    const { isOpen, handleModal, items, setItems, producto, setProducto, unidad, setUnidad, cantidad, setCantidad, precio, setPrecio, } = usePeruQuoteContext();

    const options = [
        { value: "", id: 1 },
        { value: "UND", id: 2 },
        { value: "BLS", id: 3 },
        { value: "KGM", id: 4 }
    ]

    const addItem = (e) => {
        e.preventDefault();

        if ([producto, unidad, cantidad, precio].includes("")) {
            alert("There are empty fields!")
            return;
        }

        setItems([...items, {
            id: window.crypto.randomUUID(),
            producto,
            unidad,
            cantidad,
            precio
        }])
        setProducto("")
        setUnidad("")
        setCantidad("")
        setPrecio("")
    }

    return (
        <div className={`fixed inset-0 bg-white/30 backdrop-blur-sm flex flex-col justify-center items-center px-5
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='bg-[#141624] p-5 rounded-lg w-full grid gap-3'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-bold'>Datos del producto</h3>
                    <IoMdCloseCircle size={30} onClick={handleModal} />
                </div>
                <form
                    onSubmit={addItem}
                    className='grid gap-1'>
                    <label
                        className="font-semibold"
                        htmlFor="">Nombre</label>
                    <input
                        className='px-2 py-1 rounded-sm outline-none bg-[#1E2139]'
                        type="text"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                    />
                    <div className='w-full flex gap-1'>
                        <div className='w-full flex flex-col'>
                            <label
                                className="font-semibold"
                                htmlFor="">U.M.</label>
                            <select
                                className='w-full text-center px-2 py-1 rounded-sm outline-none bg-[#1E2139]'
                                value={unidad}
                                onChange={(e) => setUnidad(e.target.value)}
                            >
                                {options.map(option => (
                                    <option key={option.id}>{option.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label
                                className="font-semibold"
                                htmlFor="">Cantidad</label>
                            <input
                                className='w-full text-right px-2 py-1 rounded-sm outline-none bg-[#1E2139]'
                                type="text"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                            />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label
                                className="font-semibold"
                                htmlFor="">Precio</label>
                            <input
                                className='w-full text-right px-2 py-1 rounded-sm outline-none bg-[#1E2139]'
                                type="text"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        className="bg-[#7B5CFA] px-5 py-2 rounded-full text-white font-semibold mx-auto mt-5"
                        onClick={handleModal}
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ModalProduct