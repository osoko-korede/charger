import React from 'react'
import { FaPlug } from 'react-icons/fa'

const NoPage = () => {
  return (
    <div className='flex inset-0 justify-center items-center h-[80vh] px-10 md:px-0'>
        <div className='flex flex-col items-center gap-8  '>
            <div className='bg-violet-100 rounded-full'>
                <FaPlug className='text-9xl text-violet-600'/>
            </div>
            <h1 className='text-3xl md:text-5xl font-bold'>404 Page not found </h1>
            <p className='w-96 text-center'>While you are here, you can check out other projects in <a href="https://osoko-korede.vercel.app/" rel='noopener' target='_blank' className='underline'>my portfolio.</a></p>
            <div className=" justify-center space-x-12 items-center">
                <a href="/" className="bg-violet-600 py-2 px-3 rounded-md text-white font-semibold">Go back Home</a>
            </div>
        </div>
    </div>
  )
}

export default NoPage