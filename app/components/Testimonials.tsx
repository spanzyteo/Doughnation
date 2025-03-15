import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:mt-32 mt-20 lg:px-20 px-5 gap-6 lg:gap-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
          <h1 className="text-xl text-[#674DF0]">Our Testimonials</h1>
        </div>
        <h1 className="lg:text-6xl text-4xl font-bold mt-6">What They Say</h1>
      </div>
      <h1 className="text-[#838694] max-w-[510px] text-[17px] leading-[2rem] font-normal">
        Lorem Ipsum is simpuly free text available in the market of text nibh
        vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text
        quis bibendum.
      </h1>
    </div>
  )
}

export default Testimonials
