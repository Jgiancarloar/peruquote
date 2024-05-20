import React from 'react'
import { ViewProforma } from '../components/ViewProforma'
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";

const Home = () => {


  return (
    <div className='h-screen px-5 py-10 flex flex-col justify-between gap-10'>
      <div className='w-full flex justify-end'>
        <Link to={"/record"}>
          <button className="bg-[#7B5CFA] px-5 py-2 rounded-full text-white font-semibold flex items-center gap-2">
            <span>Nueva proforma</span>
            <FaCirclePlus size={30} />
          </button>
        </Link>
      </div>
      <div className='h-screen flex flex-col gap-3 overflow-y-auto'>
        <ViewProforma id={1} monto={200} />
        <ViewProforma id={2} monto={2200} />
        <ViewProforma id={3} monto={500} />
        <ViewProforma id={4} monto={20} />
        <ViewProforma id={5} monto={10} />
        <ViewProforma id={6} monto={160} />
        <ViewProforma id={7} monto={4596} />
        <ViewProforma id={5} monto={10} />
        <ViewProforma id={6} monto={160} />
        <ViewProforma id={7} monto={4596} />
      </div>
      <div className='flex justify-end'>
        <Link to={"/configuration"}>
          <IoSettingsSharp size={40} />
        </Link>
      </div>
    </div>
  )
}

export default Home