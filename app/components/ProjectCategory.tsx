import { useEffect, useState, useRef } from 'react'
import { category } from '../utils/categories'
import { motion } from 'framer-motion'

const ProjectCategory = () => {
  const [itemsToShow, setItemsToShow] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gap = 16 // Adjust based on Tailwind `gap-4` (16px)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsToShow(5)
      } else if (width >= 768) {
        setItemsToShow(3)
      } else {
        setItemsToShow(1)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const maxIndex = category.length - itemsToShow
  const itemWidth = containerRef.current
    ? (containerRef.current.offsetWidth - (itemsToShow - 1) * gap) / itemsToShow
    : 0

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-[90%] flex mt-16 mx-auto xl:w-[1200px]"
    >
      <motion.div
        className="flex flex-nowrap"
        animate={{ x: `-${startIndex * (itemWidth + gap)}px` }} // Move by exact item width + gap
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ width: category.length * (itemWidth + gap) }}
      >
        {category.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className="flex-shrink-0 h-[200px] relative cursor-pointer group bg-white flex items-center justify-center flex-col gap-3 group"
              style={{
                width: `${itemWidth}px`,
                marginRight: index !== category.length - 1 ? `${gap}px` : '0px',
              }}
            >
              <div className="absolute top-0 right-0 h-[15px] w-[15px] bg-[#29F0B4] hidden group-hover:block"></div>
              <Icon className="h-[50%] w-[50%] text-[#674DF0]" />
              <h1 className="font-medium text-[17px]">{item.name}</h1>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default ProjectCategory
