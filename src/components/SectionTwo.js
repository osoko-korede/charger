import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import thumbnail from '../assets/Images/thumbnail.png'

const SectionTwo = () => {
  return (
    <div className="h-[550px] flex items-center gap-10 w-full px-40 py-24 bg-violet-100">
        
        <div className='flex flex-col gap-8 pr-40 w-[50%]'>
            <p className="text-violet-600 uppercase font-semibold tracking-wide text-base">complete toolkit</p>
            <h1 className="text-gray-950 text-5xl font-bold tracking-tight"> Complete pages for your project. </h1>
            <h3 className="text-gray-600 text-base font-normal w-[400px]">Build a unique experience by mixing and matching components. Make your brand shine.</h3>
            <ul className='flex flex-col gap-4'>
                <li className='font-bold flex gap-2 items-center text-xl'><FaCircleCheck className='text-violet-600' /> 25+ Prebuilt Pages</li>
                <li className='font-bold flex gap-2 items-center text-xl'><FaCircleCheck className='text-violet-600' /> 60 Building Blocks</li>
                <li className='font-bold flex gap-2 items-center text-xl'><FaCircleCheck className='text-violet-600' /> Comprehensive Styleguide</li>
            </ul>
        </div>
        <div className='flex items-center justify-center'>
            <img src= {thumbnail} alt="video thumbnail" width={522} height={182} className='rounded-lg '/>
        </div>
        
    </div>
  )
}

export default SectionTwo