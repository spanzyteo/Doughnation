'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { projects } from '../utils/projects'
import { motion } from 'framer-motion'
import { AiOutlineClockCircle } from 'react-icons/ai'

const FeaturedProjects = () => {
  const [itemsToShow, setItemsToShow] = useState(3)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3) // Large screens: 3 images
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3) // Medium screens: 3 images
      } else {
        setItemsToShow(1) // Mobile: 1 image
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const maxIndex = projects.length - itemsToShow

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div className="flex flex-col mt-16 pb-10">
      <h1 className="text-[#674DF0] text-center text-xl font-medium">
        Businesses You Can Back
      </h1>
      <h1 className="font-bold text-center md:text-6xl text-4xl mt-6">
        Featured Projects
      </h1>

      {/* Project Container */}
      <div className="overflow-hidden w-[90%] flex mt-16 mx-auto xl:w-[1200px]">
        <motion.div
          className="flex gap-4 flex-nowrap"
          animate={{ x: -startIndex * (104 / itemsToShow) + '%' }} // Moves images left automatically
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {projects.map((item) => (
            <div
              key={item.id}
              className="w-full md:min-w-[calc(100%/3.1)] min-w-full aspect-[4/3] relative cursor-pointer group"
            >
              <Image
                src={item.image}
                alt={`Project ${item.id}`}
                width={400}
                height={317}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(27,31,46)] to-transparent"></div>
              <div className="absolute top-16 flex flex-col w-full h-full group-hover:bg-white transition-all duration-500 ease-in-out">
                <div className="w-[90%] absolute left-6 mt-10">
                  <div className="flex items-center">
                    <button className="bg-[#674DF0] text-white px-4 py-1 uppercase text-[11px] cursor-pointer font-thin">
                      {item.category}
                    </button>
                    <div className="flex items-center">
                      <AiOutlineClockCircle className="text-white group-hover:text-black h-[20px] w-[20px] ml-6" />
                      <h1 className="text-white group-hover:text-gray-500 ml-1 text-[13px]">
                        {item.days} Days left
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-white font-bold text-2xl mt-6 w-[270px] group-hover:text-black">
                    {item.title}
                  </h1>
                  <div className="flex mt-3 items-center justify-between">
                    <h1 className="text-white text-[13px] group-hover:text-gray-500">
                      ₦{item.fundsRaised.toLocaleString()} raised of{' '}
                      <span className="group-hover:text-[#674DF0]">
                        ₦{item.fundsToRaise.toLocaleString()}
                      </span>
                    </h1>
                    <h1 className="text-white text-[13px]">
                      {(item.fundsRaised / item.fundsToRaise) * 100}%
                    </h1>
                  </div>
                  <div className="relative w-full h-[9px] bg-white group-hover:bg-gray-300 mt-3">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#674DF0]"
                      style={{
                        width: `${
                          (item.fundsRaised / item.fundsToRaise) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturedProjects
