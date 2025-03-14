'use client'
import { ImCancelCircle } from 'react-icons/im'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeSidebar } from '../store/sidebarSlice'

const Sidebar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  const dispatch = useAppDispatch()

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  return (
    <AnimatePresence>
      {sidebar && (
        <>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden flex flex-col fixed top-0 left-0 bottom-0 w-[80%] bg-white z-20 px-5 shadow-lg"
          >
            <h1 className="text-gray-700 mt-6">Home</h1>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
            <h1 className="text-gray-700 mt-4">About</h1>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
            <h1 className="text-gray-700 mt-4">Contact</h1>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
            <h1 className="text-gray-700 mt-4">Project</h1>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed lg:hidden flex top-28 left-[80%] w-[12%] h-[40px] bg-white z-20 items-center justify-center shadow-md"
          >
            <ImCancelCircle
              onClick={handleCloseSidebar}
              className="h-[25px] w-[25px] cursor-pointer text-black"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
