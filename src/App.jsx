import { Navigate, Route, Routes } from "react-router-dom"
import Generator from "./pages/Generator"
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
    <main className="bg-[#242424] h-screen font-onest overflow-y-hidden">
      <section className="relative bg-[#484848] h-full sm:max-w-sm w-full mx-auto flex flex-col text-slate-100">
        <div className="py-5">
          <h2 className="font-bold text-4xl text-center mb-5">Peru Quote</h2>
          <hr />
        </div>
        <Routes >
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/generator" element={<Generator></Generator>}></Route>
          <Route path="/configuration" element={<Configuration></Configuration>}></Route>
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </section>
    </main>
  )
}

export default App
