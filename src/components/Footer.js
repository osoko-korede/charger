import React from 'react'
import { FaPlug } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className=' bg-violet-900 py-20 px-5'>
        <div className=' text-white max-container'>
            <div className='flex items-center font-bold text-xl gap-2 pb-10'>
                <FaPlug className="text-white"/> Charger
            </div > 
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-sm gap-10'>
            <ul className='flex flex-col gap-3'>
                <li className='font-semibold text-base'>Overview</li>
                <li className='text-white/80'>Overview</li>
                <li className='text-white/80'>Pages</li>
                <li className='text-white/80'>Style Guide</li>
            </ul>
            <ul className='flex flex-col gap-3'> 
                <li className='font-semibold text-base'>Pages</li>
                <li className='text-white/80'>All Pages</li>
                <li className='text-white/80'>Landing Page</li>
                <li className='text-white/80'>About</li>
                <li className='text-white/80'>Contact</li>
                <li className='text-white/80'>Blog</li>
                <li className='text-white/80'>Features</li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li className='font-semibold text-base'>Template</li>
                <li className='text-white/50'>Changelog</li>
                <li className='text-white/50'>Styleguide</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Footer