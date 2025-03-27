import Banner from "./components/Banner";
import Categories from "./components/Categories";
import FeaturedProjects from "./components/FeaturedProjects";
import CreativitySection from "./components/CreativitySection";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import TeamMembers from "./components/TeamMembers";

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
