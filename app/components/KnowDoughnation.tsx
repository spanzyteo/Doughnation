'use client'
import { useState } from 'react'
import { IoCheckmark } from 'react-icons/io5'

const KnowDoughnation = () => {
  const [selectedSection, setSelectedSection] = useState<string>('OUR MISSION')

  const sections = [
    {
      name: 'OUR MISSION',
      content:
        'Our mission is to create an innovative platform that empowers individuals to support and fund groundbreaking ideas.',
    },
    {
      name: 'OUR VISION',
      content:
        'Our vision is to revolutionize crowdfunding by making it more accessible, transparent, and impactful for all.',
    },
    {
      name: 'OUR HISTORY',
      content:
        'Founded in 2023, Doughnation started as a small initiative to support creative minds and has grown into a leading fundraising platform.',
    },
  ]

  return (
    <div className="bg-[url('/bg-dot.png')] bg-[#F7F7F9] pt-20 pb-32 flex lg:flex-row flex-col px-5 md:px-10 xl:px-28 gap-10">
      {/* Left Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
          <h1 className="text-xl text-[#674DF0]">Get to know Doughnation</h1>
        </div>
        <h1 className="mt-6 font-bold lg:text-6xl md:text-4xl text-3xl w-auto">
          Fund the Next Big Thing
        </h1>
        <h1 className="mt-6 leading-[33px] max-w-[800px] text-[#838694] text-[17px]">
          There are many variations of passages of available but the majority
          have suffered alteration in some.
        </h1>
        <div className="flex items-center justify-between max-w-[800px]">
          <h1 className="text-[17px] mt-6 font-semibold">Technology</h1>
          <h1 className="text-[17px] text-[#838694]">68%</h1>
        </div>
        <div className="max-w-[800px] h-[9px] bg-[#E9E9EE] mt-2">
          <div className="max-w-[68%] h-full bg-[#29F0B4]"></div>
        </div>
        <div className="flex items-center justify-between max-w-[800px] mt-4">
          <h1 className="text-[17px] mt-6 font-semibold">Business</h1>
          <h1 className="text-[17px] text-[#838694]">90%</h1>
        </div>
        <div className="max-w-[800px] h-[9px] bg-[#E9E9EE] mt-2">
          <div className="max-w-[90%] h-full bg-[#29F0B4]"></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col mt-10 ">
        <div className="flex items-center gap-4">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setSelectedSection(section.name)}
              className={`relative font-medium w-full px-[15px] py-[20px] text-[17px] cursor-pointer transition-all overflow-hidden group ${
                selectedSection === section.name
                  ? 'bg-[#674DF0] text-white' // Active style
                  : 'bg-[#29F0B4] text-black' // Default style
              }`}
            >
              {/* Visible Text */}
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                {section.name}
              </span>

              {/* Smooth Expanding Background */}
              <div className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center"></div>
            </button>
          ))}
        </div>

        {/* Display selected section content */}
        <div className="mt-6 text-[#838694] text-[17px] max-w-[800px]">
          {
            sections.find((section) => section.name === selectedSection)
              ?.content
          }
        </div>
        <div className="flex md:flex-row flex-col mt-10 gap-4">
          <img
            src="/about-img2.jpg"
            alt="image"
            className="rounded-full h-[245px] w-[245px] lg:w-[160px] lg:h-[160px] xl:h-[245px] xl:w-[245px]"
          />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <IoCheckmark className="text-[#674DF0] h-[30px] w-[30px]" />
              <h1 className="text-[#838694] text-[17px]">
                Nsectetur cing elit.
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <IoCheckmark className="text-[#674DF0] h-[30px] w-[30px]" />
              <h1 className="text-[#838694] text-[17px]">
                Suspe ndisse suscipit sagittis leo.
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <IoCheckmark className="text-[#674DF0] h-[30px] w-[30px]" />
              <h1 className="text-[#838694] text-[17px]">
                Entum estibulum dignissim posuere.
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <IoCheckmark className="text-[#674DF0] h-[30px] w-[30px]" />
              <h1 className="text-[#838694] text-[17px]">
                If you are going to use a passage.
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <IoCheckmark className="text-[#674DF0] h-[30px] w-[30px]" />
              <h1 className="text-[#838694] text-[17px]">
                Lorem Ipsum on the tend to repeat.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowDoughnation
