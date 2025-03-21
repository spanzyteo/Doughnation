'use client'
import { BiMenuAltLeft } from 'react-icons/bi'
import { useAppDispatch } from '../store/hooks'
import { openSidebar } from '../store/sidebarSlice'
import Link from 'next/link'

const Navbar = () => {
  const dispatch = useAppDispatch()

  const handleOPenSidebar = () => {
    dispatch(openSidebar())
  }
  return (
    <div className="h-[90px] flex items-center justify-between fixed top-0 right-0 left-0 px-8 lg:px-20 bg-white z-50">
      <BiMenuAltLeft
        className="block lg:hidden h-[30px] w-[30px] text-black"
        onClick={() => handleOPenSidebar()}
      />
      <h1 className="font-semibold lg:text-xl text-sm text-black">
        DOUGHNATION
      </h1>
      <div className="lg:flex hidden gap-16 items-center">
        <Link href={'/'} className="text-[#838694] text-lg">
          Home
        </Link>
        <Link href={'/about-us'} className="text-[#838694] text-lg">
          About
        </Link>
        <Link href={'/contact'} className="text-[#838694] text-lg">
          Contact
        </Link>
        <Link href={'/projects'} className="text-[#838694] text-lg">
          Projects
        </Link>
      </div>
      <button className="bg-[#674DF0] lg:px-7 px-3 lg:py-[0.6rem] py-[0.4rem] text-white rounded-md text-[14px] lg:font-semibold">
        Donate Now
      </button>
    </div>
  )
}

export default Navbar
