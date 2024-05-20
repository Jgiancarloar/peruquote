import { Navigate, Route, Routes } from "react-router-dom"
import Record from "./pages/Record"
import Home from "./pages/Home"
import Configuration from "./pages/Configuration"
import usePeruQuoteContext from "./hooks/usePeruQuoteContext"
import { useEffect } from "react"

function App() {

  const {empresa,setEmpresa,items,setItems} = usePeruQuoteContext();

  useEffect(() => {
    let data = localStorage.getItem("dataempresa")
    if (data) {
      setEmpresa(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("dataempresa", JSON.stringify(empresa))
  }, [empresa])

  useEffect(() => {
    let data = localStorage.getItem("dataitems")
    if (data) {
      setItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("dataitems", JSON.stringify(items))
  }, [items])
  
  return (
    <main className="bg-[#141624] h-screen font-onest">
      <section className="text-slate-100">
        <Routes >
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/record" element={<Record></Record>}></Route>
          <Route path="/configuration" element={<Configuration></Configuration>}></Route>
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </section>
    </main>
  )
}

export default App
