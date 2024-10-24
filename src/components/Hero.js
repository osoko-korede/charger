
const Hero = () => {
  return (
    <div className=" h-[750px] bg-black flex flex-col justify-center items-center gap-10 w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#7c3aed_100%)]">
        <p className="text-gray-400 uppercase font-semibold tracking-wide text-base">Free Framer Template</p>
        <h1 className="text-white text-6xl font-bold text-center"> Boost your website.</h1>
        <h3 className="text-white text-xl font-normal md:w-[592px] text-center">Quickly assemble pages from various categories and customize them to your business's needs.</h3>
        <div>
            <button className="bg-white p-4 rounded-lg font-semibold"> Explore Pages</button>
        </div>
    </div>
  )
}

export default Hero