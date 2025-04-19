'use client'
import BillingSection from '../projects/components/BillingSection'
import DonateSection from './components/DonateSection'

const Donate = () => {

  return (
    <div className="flex flex-col mt-[90px]">
      <div className="w-full relative">
        <img
          src={'/page-bg.jpg'}
          alt="background"
          className="max-h-[338px] w-full"
        />
        <h1 className="absolute top-8 lg:top-1/2 lg:left-24 left-6 font-bold text-white text-2xl md:text-5xl">
          Donate
        </h1>
      </div>
      <form className="flex lg:flex-row flex-col gap-8 lg:gap-8 mt-24 px-5 md:px-10 xl:px-24 justify-between mb-10">
        <BillingSection />
        <DonateSection />
      </form>
    </div>
  )
}

export default Donate