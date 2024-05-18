import { createContext, useState } from "react";

const PeruQuoteContext = createContext()

const PeruQuoteProvider = ({ children }) => {

    const [isOpen,setIsOpen]= useState(false)
    const [data,setData] = useState([])
    const [empresa,setEmpresa] = useState([])
    const [empNombre,setEmpNombre] = useState("")
    const [empDoi,setEmpDoi] = useState("")
    const [empTelefono,setEmpTelefono] = useState("")
    const [items,setItems] = useState([])
    const [producto,setProducto] = useState("")
    const [unidad,setUnidad] = useState("")
    const [cantidad,setCantidad] = useState("")
    const [precio,setPrecio] = useState("")


    const handleModal = () => {
        setIsOpen(!isOpen)
    }


    return (
        <PeruQuoteContext.Provider
            value={{
                isOpen,
                handleModal,
                data,
                setData,
                empresa,setEmpresa,empNombre,setEmpNombre,empDoi,setEmpDoi,empTelefono,setEmpTelefono,
                items,
                setItems,
                producto,setProducto,unidad,setUnidad,cantidad,setCantidad,precio,setPrecio,
            }}
        >
            {children}
        </PeruQuoteContext.Provider>
    )
}

export { PeruQuoteContext, PeruQuoteProvider }