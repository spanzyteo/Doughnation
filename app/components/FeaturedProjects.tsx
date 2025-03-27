'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { projects } from '../utils/projects'
import { motion } from 'framer-motion'
import { AiOutlineClockCircle } from 'react-icons/ai'

const FeaturedProjects = () => {
  const [itemsToShow, setItemsToShow] = useState(3)
  const [startIndex, setStartIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gap = 16 // 16px gap (Tailwind gap-4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsToShow(3) // Large screens: 3 items
      } else if (width >= 768) {
        setItemsToShow(2) // Medium screens: 2 items
      } else {
        setItemsToShow(1) // Small screens: 1 item
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const maxIndex = projects.length - itemsToShow
  const itemWidth = containerRef.current
    ? (containerRef.current.offsetWidth - (itemsToShow - 1) * gap) / itemsToShow
    : 0

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 8000) // Change item every 8 seconds

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
      <div
        ref={containerRef}
        className="overflow-hidden w-[90%] flex mt-16 mx-auto xl:w-[1200px]"
      >
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: `-${startIndex * (itemWidth + gap)}px` }} // Moves by exact item width + gap
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ width: projects.length * (itemWidth + gap) }}
        >
          {projects.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 aspect-[4/3] relative cursor-pointer group"
              style={{
                width: `${itemWidth}px`,
                marginRight: index !== projects.length - 1 ? `${gap}px` : '0px',
              }}
            >
              <Image
                src={item.image}
                alt={`Project ${item.id}`}
                width={400}
                height={317}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(27,31,46)] to-transparent"></div>
              <div className="absolute bottom-0 h-[230px] left-0 right-0 pb-6 group-hover:bg-white transition-all duration-500 ease-in-out">
                <div className="w-[89%] absolute left-4 mt-10">
                  <div className="flex items-center">
                    <button className="bg-[#674DF0] text-white px-4 py-1 uppercase text-[11px] cursor-pointer">
                      {item.category}
                    </button>
                    <div className="flex items-center">
                      <AiOutlineClockCircle className="text-white group-hover:text-black h-[20px] w-[20px] ml-6" />
                      <h1 className="text-white group-hover:text-gray-500 ml-1 text-[13px]">
                        {item.days} Days left
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-white font-bold xl:text-2xl lg:text-xl md:text-lg text-xl lg:mt-6 mt-4 max-w-[260px] group-hover:text-black">
                    {item.title}
                  </h1>
                  <div className="flex mt-3 items-center justify-between">
                    <h1 className="text-white text-[13px] group-hover:text-gray-500">
                      ₦{item.fundsRaised.toLocaleString()} raised of{' '}
                      <span className="group-hover:text-[#674DF0]">
                        ₦{item.fundsToRaise.toLocaleString()}
                      </span>
                    </h1>
                    <h1 className="text-white text-[13px] group-hover:text-gray-500">
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
