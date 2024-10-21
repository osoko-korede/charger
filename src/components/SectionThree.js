import { FaAddressBook, FaArrowRight } from "react-icons/fa"

const SectionThree = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 py-24">
        <p className="text-violet-600 uppercase font-semibold tracking-wide text-base">complete toolkit</p>
        <h1 className="text-gray-950 text-5xl font-bold tracking-tight w-[592px] text-center leading-[60px]"> Building blocks for your next website. </h1>
        <h3 className="text-gray-600 text-base font-normal w-[400px] text-center">Build a unique experience by mixing and matching components. Make your brand shine.</h3>

        <div className="flex flex-col gap-8 max-w-[70%] pt-14">
            <div className="flex gap-8">
                <div className="flex flex-col gap-3 items-center bg-white p-14 rounded-3xl border border-gray-200 shadow-lg">
                    <div className=" p-4 bg-violet-100 rounded-lg">
                        <FaAddressBook className="text-violet-600 text-3xl"/>
                    </div>
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-lg text-gray-500 text-center">Write, edit and update content across CMS pages.</p>
                </div>
                <div className="flex flex-col gap-3 items-center bg-white p-14 rounded-3xl border border-gray-200 shadow-lg">
                    <div className=" p-4 bg-violet-100 rounded-lg">
                        <FaAddressBook className="text-violet-600 text-3xl"/>
                    </div>
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-lg text-gray-500 text-center">Write, edit and update content across CMS pages.</p>
                </div>
                <div className="flex flex-col gap-3 items-center bg-white p-14 rounded-3xl border border-gray-200 shadow-lg">
                    <div className=" p-4 bg-violet-100 rounded-lg">
                        <FaAddressBook className="text-violet-600 text-3xl"/>
                    </div>
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-lg text-gray-500 text-center">Write, edit and update content across CMS pages.</p>
                </div>
            </div>
            <div className="flex gap-8">
                <div className="flex flex-col gap-3 items-center bg-white p-14 rounded-3xl border border-gray-200 shadow-lg">
                    <div className=" p-4 bg-violet-100 rounded-lg">
                        <FaAddressBook className="text-violet-600 text-3xl"/>
                    </div>
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-lg text-gray-500 text-center">Write, edit and update content across CMS pages.</p>
                </div>
                <div className="flex flex-col gap-3 items-center bg-white p-14 rounded-3xl border border-gray-200 shadow-lg">
                    <div className=" p-4 bg-violet-100 rounded-lg">
                        <FaAddressBook className="text-violet-600 text-3xl"/>
                    </div>
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-lg text-gray-500 text-center">Write, edit and update content across CMS pages.</p>
                </div>
                <div className="flex flex-col gap-3 items-center bg-white p-14 rounded-3xl border border-gray-200 shadow-lg">
                    <div className=" p-4 bg-violet-100 rounded-lg">
                        <FaAddressBook className="text-violet-600 text-3xl"/>
                    </div>
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-lg text-gray-500 text-center">Write, edit and update content across CMS pages.</p>
                </div>
            </div>
        </div>
        <p className="flex flex-row gap-1 items-center text-base text-violet-600 font-bold">See all features  <FaArrowRight /></p>

    </div>
  )
}

export default SectionThree