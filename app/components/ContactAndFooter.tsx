import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaPhoneVolume } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLocationDot } from 'react-icons/fa6'

const ContactAndFooter = () => {
  return (
    <div className="bg-[url('/bg-footer.png')] bg-cover bg-center bg-[#1B1F2E] mt-[8rem flex flex-col xl:px-24 lg:px-28 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-32 gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-bold text-4xl">Doughnation</h1>
          <p className="max-w-[700px] text-[#8d91a2] leading-[32px] text-[17px]">
            Lorem quas utamur delicata qui, vix ei prima mentitum omnesque. Duo
            corrumpit cotidieque ne.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-[45px] w-[45px] bg-white flex items-center justify-center">
              <FaXTwitter className="text-[#1B1F2E] h-[20px] w-[20px]" />
            </div>
            <div className="h-[45px] w-[45px] bg-white flex items-center justify-center">
              <FaFacebookF className="text-[#1B1F2E] h-[20px] w-[20px]" />
            </div>
            <div className="h-[45px] w-[45px] bg-white flex items-center justify-center">
              <FaPinterest className="text-[#1B1F2E] h-[20px] w-[20px]" />
            </div>
            <div className="h-[45px] w-[45px] bg-white flex items-center justify-center">
              <FaInstagram className="text-[#1B1F2E] h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-2xl ">Company</h1>
          <div className="flex flex-col gap-6">
            <Link href={'/about-us'} className="text-[#8d91a2] text-[17px]">
              About Us
            </Link>
            <Link
              href={'/latest-events'}
              className="text-[#8d91a2] text-[17px]"
            >
              Latest Events
            </Link>
            <Link href={'/how-it-works'} className="text-[#8d91a2] text-[17px]">
              How It Works
            </Link>
            <Link
              href={'/news-and-articles'}
              className="text-[#8d91a2] text-[17px]"
            >
              News & Articles
            </Link>
            <Link href={'/contact-us'} className="text-[#8d91a2] text-[17px]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-2xl ">Fundraising</h1>
          <div className="flex flex-col gap-6">
            <Link href={'/education'} className="text-[#8d91a2] text-[17px]">
              Education
            </Link>
            <Link href={'/design'} className="text-[#8d91a2] text-[17px]">
              Design
            </Link>
            <Link
              href={'/film-and-video'}
              className="text-[#8d91a2] text-[17px]"
            >
              Film & Video
            </Link>
            <Link href={'/technology'} className="text-[#8d91a2] text-[17px]">
              Technology
            </Link>
            <Link href={'/games'} className="text-[#8d91a2] text-[17px]">
              Games
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-2xl ">Contact</h1>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FaPhoneVolume className="h-[25px] w-[25px] text-[#29F0B4]" />
              <p className="text-[#8d91a2] text-[17px]">666 888 0000</p>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineMail className="h-[25px] w-[25px] text-[#29F0B4]" />
              <p className="text-[#8d91a2] text-[17px]">needhelp@potisen.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="h-[25px] w-[25px] text-[#29F0B4]" />
              <p className="text-[#8d91a2] text-[17px]">needhelp@potisen.com</p>
            </div>
            <form className="flex flex-col gap-6">
              <input
                type="email"
                placeholder="Email"
                className="h-[50px] border border-[#323643] focus:outline-none focus:border-[#674DF0] text-[#8d91a2] px-2"
              />
              <textarea
                name="description"
                placeholder="Message Us"
                className="h-[74px] border border-[#323643] focus:outline-none focus:border-[#674DF0] text-[#8d91a2] px-2"
                rows={3}
              ></textarea>
              <button className="uppercase bg-[#29F0B4] px-9 py-5 hover:bg-black hover:text-white cursor-pointer transition-all duration-500 ease-in-out">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-t-[#323643]">
        <h1 className="text-[#8d91a2] text-[17px] mt-8 text-center mb-8">
          © Copyright 2025 by doughnation
        </h1>
      </div>
    </div>
  )
}

export default ContactAndFooter
