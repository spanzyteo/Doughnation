'use client'

import Partner from "./Partner"
import ProjectsCompleted from "./ProjectsCompleted"
import Raised from "./Raised"
import RepeatCustomers from "./RepeatCustomers"

const DoughnationRecords = () => {
  return (
    <div className="bg-[url('/category-bg.png')] bg-cover bg-center bg-[#674DF0] mt-16 pb-10 md:pb-0">
      <div className="flex md:flex-row flex-col gap-10 md:gap-0 lg:mt-20 mt-10 items-center justify-between px-16 xl:px-32">
        <ProjectsCompleted />
        <div className="h-[310px] w-[1px] bg-gray-400 md:block hidden"></div>
        <Raised />
        <div className="h-[310px] w-[1px] bg-gray-400 md:block hidden"></div>
        <Partner />
        <div className="h-[310px] w-[1px] bg-gray-400 md:block hidden"></div>
        <RepeatCustomers />
      </div>
    </div>
  )
}

export default DoughnationRecords
