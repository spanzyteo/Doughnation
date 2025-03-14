import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import FeaturedProjects from "./components/FeaturedProjects";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <Banner />
      <Categories />
      <FeaturedProjects />
    </div>
  )
}
