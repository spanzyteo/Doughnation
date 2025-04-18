'use client'
import CreativitySection from '../components/Home/CreativitySection'
import DoughnationRecords from '../components/Doughnation_Records/DoughnationRecords'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import ProjectCategory from '../components/ProjectCategory'

const Projects = () => {
  return (
    <div className="flex flex-col mt-[90px]">
      <div className="w-full relative">
        <img
          src={'/page-bg.jpg'}
          alt="background"
          className="max-h-[338px] w-full"
        />
        <h1 className="absolute top-8 lg:top-1/2 lg:left-24 left-6 font-bold text-white text-2xl md:text-5xl">
          Projects
        </h1>
      </div>
      <div className="bg-[#F7F7F9] pb-16">
        <div className="flex flex-col gap-8 pt-24 px-5 md:px-10 xl:px-28 mx-auto">
          <div className="flex items-center gap-4 mx-auto">
            <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
            <h1 className="text-xl text-[#674DF0]">
              Which Category Interest You
            </h1>
          </div>
          <h1 className="leading-[33px] text-center max-w-[800px] text-[#838694] text-[16px] font-normal mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown was popularised.
          </h1>
        </div>
        <ProjectCategory />
      </div>
      <FeaturedProjects />
      <CreativitySection />
    </div>
  )
}

export default Projects
