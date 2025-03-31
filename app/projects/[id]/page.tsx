'use client'
import { useParams } from 'next/navigation'
import { projects } from '@/app/utils/projects'
import { useState } from 'react'
import Link from 'next/link'
import SimilarProjects from '@/app/components/SimilarProjects'

const ProjectTitle = () => {
  const params = useParams()
  const projectId = params.id

  const [donateAmount, setDonateAmount] = useState(50000)

  const selectedProject = projects.find((item) => item.id === Number(projectId))

  const similarProjects = projects.filter(
    (item) => item.id !== Number(projectId)
  )

  return (
    <div className="flex flex-col mt-[90px] bg-[#F7F7F9]">
      <div className="w-full relative">
        <img
          src={'/page-bg.jpg'}
          alt="background"
          className="max-h-[338px] w-full"
        />
        <h1 className="absolute top-8 lg:left-24 left-6 font-bold text-white text-2xl md:text-5xl">
          {selectedProject?.title}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-8 mt-24 px-5 md:px-10 xl:px-28">
        <div className="md:w-[60%] flex flex-col gap-8">
          <img
            src={selectedProject?.image}
            alt="img"
            className="object-cover lg:h-[600px]"
          />
          <h1 className="font-bold text-4xl">Short Story</h1>
          <h1 className="text-[18px] text-[#838694] leading-[33px] font-medium">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam inventore.
          </h1>
        </div>
        <div className="flex flex-col gap-8 items-start">
          <button className="bg-[#674DF0] text-white px-4 py-1 uppercase text-[16px] cursor-pointer">
            {selectedProject?.category}
          </button>
          <h1 className="lg:text-4xl text-3xl font-bold max-w-[500px] leading-[40px]">
            {selectedProject?.title}
          </h1>
          <div className="flex md:flex-row flex-col items-center gap-4 justify-between w-full">
            <div className="bg-white px-[15px] py-[35px] flex flex-col gap-4 items-center w-full">
              <h1 className="text-[24px] text-[#674DF0]">
                ₦{selectedProject?.fundsRaised.toLocaleString()}
              </h1>
              <h1 className="text-[17px] text-[#838694]">Raised</h1>
            </div>
            <div className="bg-white px-[15px] py-[35px] flex flex-col gap-4 items-center w-full">
              <h1 className="text-[24px] text-[#674DF0]">
                {selectedProject?.backers}
              </h1>
              <h1 className="text-[17px] text-[#838694]">Backers</h1>
            </div>
            <div className="bg-white px-[15px] py-[35px] flex flex-col gap-4 items-center w-full">
              <h1 className="text-[24px] text-[#674DF0]">
                {selectedProject?.days}
              </h1>
              <h1 className="text-[17px] text-[#838694] whitespace-nowrap">
                Days Left
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between items-center">
              <h1 className="font-medium text-[#838694] leading-[29px]">
                Raised:
              </h1>
              <h1 className="font-medium text-[#838694] leading-[29px]">
                {selectedProject
                  ? ((selectedProject.fundsRaised ?? 0) /
                      (selectedProject.fundsToRaise ?? 1)) *
                    100
                  : 0}
                %
              </h1>
            </div>
            <div className="relative w-full h-[9px] bg-white group-hover:bg-gray-300 mt-3">
              <div
                className="absolute top-0 left-0 h-full bg-[#29F0B4]"
                style={{
                  width: `${
                    selectedProject
                      ? ((selectedProject.fundsRaised ?? 0) /
                          (selectedProject.fundsToRaise ?? 1)) *
                        100
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h1
              onClick={() => setDonateAmount(50000)}
              className="bg-white px-4 py-2 font-medium cursor-pointer"
            >
              ₦50,000
            </h1>
            <h1
              onClick={() => setDonateAmount(100000)}
              className="bg-white px-4 py-2 font-medium cursor-pointer"
            >
              ₦100,000
            </h1>
            <h1
              onClick={() => setDonateAmount(150000)}
              className="bg-white px-4 py-2 font-medium cursor-pointer"
            >
              ₦150,000
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-[17px] text-[#838694]">₦</h1>
            <input
              type="number"
              placeholder="50000"
              defaultValue={donateAmount}
              className="bg-white border border-[#E9E9EE] w-[120px] px-4 py-2 focus:outline-none"
            />
            <Link
              href={'/donate'}
              className="py-2 px-6 bg-[#674DF0] text-white font-medium relative hover:bg-[#29F0B4] transition-all duration-500 ease-in-out"
            >
              Donate
              <div className="absolute top-0 right-0 h-[10px] w-[10px] bg-black"></div>
            </Link>
          </div>
        </div>
      </div>
      <SimilarProjects similarProjects={similarProjects} />
    </div>
  )
}

export default ProjectTitle
