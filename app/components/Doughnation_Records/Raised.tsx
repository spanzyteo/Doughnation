'use client'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Raised = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:pb-24">
      {/* Hover effect applied to this div */}
      <motion.div
        className="h-[111px] w-[111px] border-3 border-white rounded-full flex items-center justify-center group hover:bg-[#29F0B4] hover:border-none relative transition-all duration-500 ease-in-out"
        whileHover="hovered"
      >
        {/* Motion div for the bouncing effect */}
        <motion.div
          className="h-[50px] w-[50px] text-[#29F0B4] group-hover:text-black"
          variants={{
            hovered: {
              scale: [1, 1.2, 1],
              transition: {
                duration: 0.95,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            },
          }}
        >
          <FaPaperPlane className="w-full h-full" />
        </motion.div>

        {/* White circle appearing with ease */}
        <motion.div
          className="absolute top-0 right-0 h-[25px] w-[25px] bg-white rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          variants={{
            hovered: {
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5, ease: 'easeOut' },
            },
          }}
        ></motion.div>
      </motion.div>
      <h1 className="text-4xl font-semibold text-white">808</h1>
      <h1 className="text-white text-lg text-center min-w-[145px]">
        Raised to Date
      </h1>
    </div>
  )
}

export default Raised