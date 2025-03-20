'use client'
import { ImCancelCircle } from 'react-icons/im'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeSidebar } from '../store/sidebarSlice'
import Link from 'next/link'

const Sidebar = () => {
  const sidebar = useAppSelector((state) => state.sidebar.sidebarOPen)
  const dispatch = useAppDispatch()

  const handleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [sidebar])

  return (
    <AnimatePresence>
      {sidebar && (
        <>
          {/* Overlay to close sidebar when clicked */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-10 lg:hidden"
            onClick={handleCloseSidebar} // Clicking outside closes the sidebar
          ></motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden flex flex-col fixed top-0 left-0 bottom-0 w-[80%] bg-white z-20 px-5 shadow-lg"
          >
            <Link
              href={'/'}
              onClick={() => handleCloseSidebar()}
              className="text-gray-700 mt-6"
            >
              Home
            </Link>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
            <Link
              href={'/about-us'}
              onClick={() => handleCloseSidebar()}
              className="text-gray-700 mt-4"
            >
              About
            </Link>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
            <Link
              href={'/contact'}
              onClick={() => handleCloseSidebar()}
              className="text-gray-700 mt-4"
            >
              Contact
            </Link>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
            <Link
              href={'/project'}
              onClick={() => handleCloseSidebar()}
              className="text-gray-700 mt-4"
            >
              Project
            </Link>
            <div className="mt-4 border-t border-t-gray-300 w-full"></div>
          </motion.div>

          {/* Close button */}
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
