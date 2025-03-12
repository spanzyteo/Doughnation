import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <FeaturedProjects />
    </>
  )
}
