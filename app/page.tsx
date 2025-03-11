import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <div className="text-red-600">Hello world</div>
    </>
  )
}
