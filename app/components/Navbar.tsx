'use client'
import { BiMenuAltLeft } from 'react-icons/bi'
import { useAppDispatch } from '../store/hooks'
import { openSidebar } from '../store/sidebarSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()

  const handleOPenSidebar = () => {
    dispatch(openSidebar())
  }
  return (
    <div className="h-[90px] flex items-center justify-between fixed top-0 right-0 left-0 px-8 lg:px-20 bg-white z-10">
      <BiMenuAltLeft className='block lg:hidden h-[30px] w-[30px]' onClick={() => handleOPenSidebar()}/>
      <h1 className="font-semibold lg:text-xl text-sm">DOUGHNATION</h1>
      <div className="lg:flex hidden gap-10 items-center">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Projects</h1>
      </div>
      <button className="bg-[#674DF0] lg:px-7 px-3 lg:py-[0.6rem] py-[0.4rem] text-white rounded-md text-[14px] lg:font-semibold">
        Donate Now
      </button>
    </div>
  )
}

export default Navbar
