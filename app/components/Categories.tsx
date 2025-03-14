import { RiSettings4Line } from 'react-icons/ri'
import { MdOutlineVideoSettings } from 'react-icons/md'
import { PiBookOpenText, PiStethoscopeBold } from 'react-icons/pi'
import { GiClothes } from 'react-icons/gi'
import { CgIfDesign } from 'react-icons/cg'

const Categories = () => {
  return (
    <div className="bg-[url('/category-bg.png')] bg-cover bg-center bg-[#674DF0] px-5 lg:px-16 flex flex-col lg:flex-row justify-between pt-24 lg:pb-16 pb-[8rem]">
      <div className="flex flex-col">
        <h1 className="text-[#D1C8FE] text-lg">Which Category Interest You</h1>
        <h1 className="text-white font-bold lg:text-5xl text-3xl mt-4">
          Top Categories
        </h1>
        <h1 className="text-[#D1C8FE] text-lg mt-10 lg:w-[470px] md:w-[520px] sm:w-[362px]">
          Discover and support innovative projects across various fields.
          Whether it's groundbreaking technology, creative video content,
          educational initiatives, life-saving medical advancements, fashion
          trends, or inspiring design, your donations help bring ideas to life
          and make a real impact.
        </h1>
      </div>

      {/* WRAPPING GRID IN A CONTAINER WITH MAX WIDTH */}
      <div className="w-full max-w-[620px] md:max-w-[750px] lg:max-w-[650px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8 lg:mt-0">
          <div className="h-[190px] w-full bg-white flex flex-col items-center justify-center gap-3">
            <RiSettings4Line className="h-[60px] w-[60px] text-[#674DF0]" />
            <h1 className="text-xl text-black">Technology</h1>
          </div>
          <div className="h-[190px] w-full bg-white flex flex-col items-center justify-center gap-3">
            <MdOutlineVideoSettings className="h-[60px] w-[60px] text-[#674DF0]" />
            <h1 className="text-xl text-black">Videos</h1>
          </div>
          <div className="h-[190px] w-full bg-white flex flex-col items-center justify-center gap-3">
            <PiBookOpenText className="h-[60px] w-[60px] text-[#674DF0]" />
            <h1 className="text-xl text-black">Education</h1>
          </div>
          <div className="h-[190px] w-full bg-white flex flex-col items-center justify-center gap-3">
            <PiStethoscopeBold className="h-[60px] w-[60px] text-[#674DF0]" />
            <h1 className="text-xl text-black">Medical</h1>
          </div>
          <div className="h-[190px] w-full bg-white flex flex-col items-center justify-center gap-3">
            <GiClothes className="h-[60px] w-[60px] text-[#674DF0]" />
            <h1 className="text-xl text-black">Fashion</h1>
          </div>
          <div className="h-[190px] w-full bg-white flex flex-col items-center justify-center gap-3">
            <CgIfDesign className="h-[60px] w-[60px] text-[#674DF0]" />
            <h1 className="text-xl text-black">Design</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
