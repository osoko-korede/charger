import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import thumbnail from '../assets/Images/thumbnail.png'

const SectionTwo = () => {
  return (
    <div className=''>
      <div className=" bg-violet-100" >
        <div className="max-container flex items-center gap-10 w-full px-40 py-24 flex-col lg:flex-row">
          <div className='flex flex-col gap-8 md:pr-40 md:w-[70%] max-container'>
              <p className="text-violet-600 uppercase font-semibold tracking-wide text-base">complete toolkit</p>
              <h1 className="text-gray-950 text-4xl md:text-5xl font-bold tracking-tight"> Complete pages for your project. </h1>
              <h3 className="text-gray-600 text-base font-normal lg:w-[400px]">Build a unique experience by mixing and matching components. Make your brand shine.</h3>
              <ul className='flex flex-col gap-4'>
                  <li className='font-bold flex gap-2 items-center text-xl'><FaCircleCheck className='text-violet-600' /> 25+ Prebuilt Pages</li>
                  <li className='font-bold flex gap-2 items-center text-xl'><FaCircleCheck className='text-violet-600' /> 60 Building Blocks</li>
                  <li className='font-bold flex gap-2 items-center text-xl'><FaCircleCheck className='text-violet-600' /> Comprehensive Styleguide</li>
              </ul>
          </div>
          <div className='flex items-center justify-center md:w-[70%]'>
              <img src= {thumbnail} alt="video thumbnail" width={522} height={182} className='rounded-lg '/>
          </div>  
        </div>
     
      </div>
        <div className="flex flex-col items-center gap-4 max-container pt-10">
          <p className="text-violet-600 uppercase font-semibold tracking-widest text-base">complete toolkit</p>
          <h1 className="text-gray-950 md:text-5xl font-bold text-4xl md:w-[592px] text-center md:leading-[60px]">Building blocks for your next website.</h1>
          <h3 className="text-gray-600 text-base font-normal md:w-[550px] text-center">Build a unique experience by mixing and matching components. Make your brand shine.</h3>
        </div>
        <div className='flex md:flex-row gap-8 overflow-hidden justify-center py-20 max-container items-center'>
          <img src= {thumbnail} alt="video thumbnail" className='rounded-xl md:h-[300px] w-[500px]'/>
          <img src= {thumbnail} alt="video thumbnail" className='rounded-xl md:h-[300px] w-[500px]'/>
          <img src= {thumbnail} alt="video thumbnail" className=' rounded-xl md:h-[300px] w-[500px]'/>
        </div>
    </div>
    
  )
}

export default SectionTwo