import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import KnowDoughnation from '../components/KnowDoughnation'
import DoughnationRecords from '../components/DoughnationRecords'

const AboutUs = () => {
  return (
    <div className="flex flex-col mt-[90px]">
      <div className="w-full relative">
        <img
          src={'/page-bg.jpg'}
          alt="background"
          className="max-h-[338px] w-full"
        />
        <h1 className="absolute top-1/2 left-24 font-bold text-white text-2xl md:text-5xl">
          About Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 mt-24 px-5 md:px-10 xl:px-28">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
            <h1 className="text-xl text-[#674DF0]">Our Introduction</h1>
          </div>
          <h1 className="mt-6 font-bold lg:text-6xl md:text-4xl text-3xl w-auto">
            Learn About Our Company
          </h1>
          <h1 className="mt-6 leading-[33px] max-w-[800px] text-[#838694] text-[17px]">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humou or
            randomised words.
          </h1>
          <div className="mt-10 flex gap-6">
            <div className="w-[58px] h-[58px] bg-[#F0EDFD] flex items-center justify-center">
              <IoMdCheckmarkCircleOutline className="text-[#674DF0] h-[35px] w-[35px]" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Highest Success Rates</h1>
              <h1 className="text-[#838694] text-[17px] max-w-[890px] leading-[32px]">
                Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is
                simply free text quis bibendum.
              </h1>
            </div>
          </div>
          <div className="mt-10 flex gap-6">
            <div className="w-[58px] h-[58px] bg-[#F0EDFD] flex items-center justify-center">
              <IoMdCheckmarkCircleOutline className="text-[#674DF0] h-[35px] w-[35px]" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Millions in Funding</h1>
              <h1 className="text-[#838694] text-[17px] max-w-[890px] leading-[32px]">
                Lorem Ipsum velit auctor aliquet. Aenean sollic tudin, lorem is
                simply free text quis bibendum.
              </h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/about-img.jpg"
            alt="img"
            className="w-full h-full object-cover"
          />
          <h1 className="font-bold text-[#1b1f2e] text-[40px] bg-[#29F0B4] py-[30px] px-[45px] absolute bottom-[20px] left-[30px] text-center">
            8,000 <p className="font-normal text-[18px]">Satisfied Customers</p>
          </h1>
        </div>
      </div>
      <DoughnationRecords />
      <KnowDoughnation />
    </div>
  )
}

export default AboutUs
