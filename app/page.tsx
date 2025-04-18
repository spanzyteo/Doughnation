import Banner from './components/Home/Banner'
import Categories from './components/Home/Categories'
import FeaturedProjects from './components/Home/FeaturedProjects'
import CreativitySection from './components/Home/CreativitySection'
import Partners from './components/Home/Partners'
import Testimonials from './components/Home/Testimonials'
import TeamMembers from './components/Home/TeamMembers'

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <Categories />
      <FeaturedProjects />
      <CreativitySection />
      <Partners />
      <Testimonials />
      <TeamMembers />
      <div className="mt-[4rem]"></div>
    </div>
  )
}
