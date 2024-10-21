import { FaArrowRight, FaPlug } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="sticky">
        <div className="w-full flex justify-center bg-violet-600 text-white h-16 items-center text-sm">
            <p className="flex flex-row gap-1">Explore brand new Boost template. <span className="flex items-center gap-1 font-semibold">Learn more <FaArrowRight className="h-3"/> </span></p>
        </div>
        {/* <div className=" bg-gray-950 h-20 "> */}
            <div className="flex justify-between text-white text-sm m-auto bg-gray-950 h-20 px-40 items-center">
                <div className="flex items-center font-bold text-xl gap-2"> <FaPlug className="text-violet-600"/> Charger</div>
                <div className="flex text-base font-medium gap-4 items-center">
                    <ul className="flex gap-5 ">
                        <li>Overview</li>
                        <li>Pages</li>
                        <li>Style Guide</li>
                    </ul>
                    <button className="bg-violet-600 p-3 rounded-lg"> Use Template</button>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Navbar