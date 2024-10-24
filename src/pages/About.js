import React from 'react'
import { FaPlug } from 'react-icons/fa'

const About = () => {
  return (
    <div className='flex inset-0 justify-center items-center h-[80vh] px-10 md:px-0'>
        <div className='flex flex-col items-center gap-8  '>
            <div className='bg-violet-100 rounded-full'>
                <FaPlug className='text-9xl text-violet-600'/>
            </div>
            <h1 className='text-3xl md:text-5xl font-bold'>Coding Takes Time ⏳</h1>
            <p className='w-96 text-center'>The About page is being built. While you are here, you can check out other projects in <a href="https://osoko-korede.vercel.app/" rel='noopener' target='_blank' className='underline'>my portfolio.</a></p>
            <div className=" justify-center space-x-12 items-center">
                <a href="/" className="bg-violet-600 py-2 px-3 rounded-md text-white font-semibold">Go back Home</a>
            </div>
        </div>
    </div>
  )
}

export default About