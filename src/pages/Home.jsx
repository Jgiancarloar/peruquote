import React from 'react'
import { Link } from 'react-router-dom'
import usePeruQuoteContext from '../hooks/usePeruQuoteContext'

const Home = () => {


  return (
    <div className='relative flex flex-col items-center gap-5 h-full'>
        <Link to={"/generator"}><button className='w-52 bg-gray-400 text-black py-2 mx-auto'>Generator</button></Link>
        <Link to={"/configuration"}><button className='w-52 bg-gray-400 text-black py-2 mx-auto'>Configuration</button></Link>
        <div className='absolute bottom-0 pb-10 grid place-items-center'>
        
        </div>
    </div>
  )
}

export default Home