import thumbnail from '../assets/Images/thumbnail.png'


const SectionThree = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <div className="flex flex-col items-center gap-4 max-container">
            <p className="text-violet-600 uppercase font-semibold tracking-widest text-base">resources</p>
            <h1 className="text-gray-950 text-4xl md:text-5xl font-bold md:w-[592px] text-center md:leading-[60px]">Insights and news from Boost team.</h1>
            <h3 className="text-gray-600 text-base font-normal md:w-[550px] text-center">Discover articles and guides from Ultra team and improve functionality of your websites.</h3>
            <div>
                <button className="bg-violet-600 p-4 rounded-lg font-semibold text-white"> Use Template</button>
            </div>
        </div>
        <div className=" gap-8 max-container py-14">
            <div className=" gap-8 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-3 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                    <div className=''>
                        <img src= {thumbnail} alt="video thumbnail" className='h-[250px] w-[1000px] lg:h-[400px]'/>
                    </div> 
                    <div className="flex flex-col gap-3 p-5">
                        <h1 className="uppercase font-bold tracking-widest">Inspiration</h1>
                        <h1 className="text-2xl font-bold">10 ways to Improve Your Launch Campaign</h1>
                        <p className="text-lg text-gray-500">Sept 5, 2022</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                    <div className=''>
                        <img src= {thumbnail} alt="video thumbnail" className='h-[250px] w-[1000px] lg:h-[400px]'/>
                    </div> 
                    <div className="flex flex-col gap-3 p-5">
                        <h1 className="uppercase font-bold tracking-widest">Inspiration</h1>
                        <h1 className="text-2xl font-bold">10 ways to Improve Your Launch Campaign</h1>
                        <p className="text-lg text-gray-500">Sept 5, 2022</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                    <div className=''>
                        <img src= {thumbnail} alt="video thumbnail" className='h-[250px] w-[1000px] lg:h-[400px]'/>
                    </div> 
                    <div className="flex flex-col gap-3 p-5">
                        <h1 className="uppercase font-bold tracking-widest">Inspiration</h1>
                        <h1 className="text-2xl font-bold">10 ways to Improve Your Launch Campaign</h1>
                        <p className="text-lg text-gray-500">Sept 5, 2022</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                    <div className=''>
                        <img src= {thumbnail} alt="video thumbnail" className='h-[250px] w-[1000px] lg:h-[400px]'/>
                    </div> 
                    <div className="flex flex-col gap-3 p-5">
                        <h1 className="uppercase font-bold tracking-widest">Inspiration</h1>
                        <h1 className="text-2xl font-bold">10 ways to Improve Your Launch Campaign</h1>
                        <p className="text-lg text-gray-500">Sept 5, 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex  bg-violet-600 py-32 text-white'>
            <div className="max-container flex md:flex-row gap-28 flex-col">
              <div className=' flex flex-col gap-10 justify-center'>
                <p className="text-white/80 uppercase font-bold tracking-widest">Fraction template</p>
                <h1 className=" text-5xl font-bold tracking-tight"> Build a website that performs better.</h1>
                <div>
                 <button className="bg-white p-4 rounded-lg font-semibold text-black"> Use Template</button>
                </div>
              </div>
            <div className=''>
                <img src= {thumbnail} alt="video thumbnail" width={522} height={182} className='rounded-lg h-[250px] lg:h-[400px] w-[1000px]'/>
            </div>  
            </div>
        </div>
    </div>
  )
}

export default SectionThree