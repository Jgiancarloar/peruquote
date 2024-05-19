import React from 'react'
import { Button } from '../components/Button'
import { ViewProforma } from '../components/ViewProforma'
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className='h-screen p-5 flex flex-col gap-10'>
      <div className='w-full flex justify-end'>
        <Link to={"/record"}>
        <Button title="Nueva proforma" />
        </Link>
      </div>
      <div className='flex flex-col gap-3'>
        <ViewProforma id={1} monto={200} />
        <ViewProforma id={2} monto={2200} />
        <ViewProforma id={3} monto={500} />
        <ViewProforma id={4} monto={20} />
        <ViewProforma id={5} monto={10} />
        <ViewProforma id={6} monto={160} />
        <ViewProforma id={7} monto={4596} />
      </div>
      <Link to={"/configuration"}>
        <div className='fixed bottom-5 right-5'>
          <IoSettingsSharp size={40} />
        </div>
      </Link>
    </div>
  )
}

export default Home