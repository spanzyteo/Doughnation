'use client'
import { useEffect, useState } from 'react'
import { reviews } from '../../utils/reviews'
import Image from 'next/image'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const limitedData = reviews.slice(0, 3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedData.length)
    }, 10000) // 6 seconds interval

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [limitedData.length])

  return (
    <div className="flex flex-col lg:mt-32 mt-20 lg:px-20 px-5">
      <div className="flex lg:flex-row flex-col justify-between gap-6 lg:gap-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
            <h1 className="text-xl text-[#674DF0]">Our Testimonials</h1>
          </div>
          <h1 className="lg:text-6xl text-4xl font-bold mt-6">What They Say</h1>
        </div>
        <h1 className="text-[#838694] max-w-[510px] text-[17px] leading-[2rem] font-normal">
          Lorem Ipsum is simpuly free text available in the market of text nibh
          vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free
          text quis bibendum.
        </h1>
      </div>
      <div className="relative w-full overflow-hidden mt-20">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {limitedData.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 lg:flex-row flex-col bg-[#F7F7F9] border-l-4 border-l-[#29F0B4] px-5 lg:px-16 gap-8 overflow-auto lg:gap-0 pb-6"
            >
              <div className="flex lg:flex-row flex-col justify-between">
                <div className="flex flex-col mt-8 lg:mt-16">
                  <h1 className="text-[#674DF0] font-bold text-3xl">
                    {item.name}
                  </h1>
                  <h1 className="md:text-[20px] md:leading-[42px] leading-[33px] max-w-[642px] mt-10 text-[#5d5d5d]">
                    {item.review}
                  </h1>
                </div>
                <Image
                  src={item.image}
                  alt="image"
                  width={370}
                  height={417}
                  className="w-[282px] sm:w-[370px] md:max-w-[445px] sm:h-[417px] h-[280px] object-cover mt-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
