import { TbBuildingSkyscraper } from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'
import { LuPhone } from 'react-icons/lu'

const ContactDetails = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row mt-10 pt-10 gap-0">
      <div className="flex xl:flex-row flex-col bg-[#674DF0] px-5 md:px-10 xl:px-5 pt-16 pb-16 gap-8 w-full">
        <div className="relative bg-[#5F48DC] h-[105px] w-[105px] rounded-full flex items-center justify-center">
          <TbBuildingSkyscraper className="text-white h-[50px] w-[50px]" />
          <div className="h-[20px] w-[20px] bg-white absolute top-0 right-0 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-bold text-2xl">About Doughnation</h1>
          <h1 className="text-white text-[17px] max-w-[285px] leading-[33px]">
            Morbi ut tellus ac leo molestie luctus nec vehicula sed justo onec
            tempor rhoncus volutpat ras lorem.
          </h1>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col bg-black px-5 md:px-10 xl:px-5 pt-16 pb-16 gap-8 w-full">
        <div className="relative bg-[#29F0B4] h-[105px] w-[105px] rounded-full flex items-center justify-center">
          <IoLocationOutline className="text-white h-[50px] w-[50px]" />
          <div className="h-[20px] w-[20px] bg-white absolute top-0 right-0 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-bold text-2xl">Our Address</h1>
          <h1 className="text-white text-[17px] max-w-[285px] leading-[33px]">
            66 Road Broklyn Street, 600 New York. United States of America P.O
            Box 0000
          </h1>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col bg-[#29F0B4] px-5 md:px-10 xl:px-5 pt-16 pb-16 gap-8 w-full">
        <div className="relative bg-[#28DBA6] h-[105px] w-[105px] rounded-full flex items-center justify-center">
          <LuPhone className="text-white h-[50px] w-[50px]" />
          <div className="h-[20px] w-[20px] bg-white absolute top-0 right-0 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-bold text-2xl">Our Contact</h1>
          <h1 className="text-white text-[17px] max-w-[285px] leading-[33px]">
            needhelp@doughnation.com info@doughnation.com 666 888 0000
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
