import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
import { FaArrowRight, FaPlug } from "react-icons/fa"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }


  return (
    <nav className="sticky top-0 z-50">
        <div>
            <div className=" w-full flex justify-center bg-violet-600 text-white h-16 items-center text-sm">
                <p className="flex flex-row gap-1">Explore brand new Boost template. <span className="flex items-center gap-1 font-semibold">Learn more <FaArrowRight className="h-3"/> </span></p>
            </div>
            <div className="px-4 mx-auto relative text-sm bg-black text-white">
                <div className="flex justify-between items-center py-6 max-container">
                    <div className="flex items-center font-bold text-xl gap-2 text-white"> <FaPlug className="text-violet-600"/> Charger</div>
                    <div className="hidden md:flex font-semibold">
                        <ul className="space-x-12 flex pr-10">
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all" : "" }>
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all" : "" }>
                                About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all" : "" }>
                                Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/features" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all" : "" }>
                                Features
                                </NavLink>
                            </li>
                        </ul>
                        <div className=" justify-center space-x-12 items-center">
                            <NavLink to="/contact" className="bg-violet-600 py-2 px-3 rounded-md">Contact</NavLink>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-col justify-end">
                        <button className="text-3xl text-white" onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <AiOutlineClose /> : < BiMenuAltRight/>}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-black w-full py-10 flex flex-col justify-center items-center lg:hidden text-white">
                        <ul className="text-base font-semibold flex items-center flex-col justify-center gap-8">
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all py-4" : "" }>
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all py-4" : "" }>
                                About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing"pricing className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all py-4" : "" }>
                                Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/features" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-violet-500 cursor-pointer transition-all py-4" : "" }>
                                Features
                                </NavLink>
                            </li>
                        </ul>
                        <div className="flex space-x-6 font-semibold py-8" >
                            <a href="/contact" className="bg-white rounded-lg py-2 px-10 text-black">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </div>

    </nav>
  )
}

export default Navbar