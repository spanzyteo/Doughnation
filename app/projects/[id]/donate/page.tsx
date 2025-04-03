'use client'
import YourDonation from '../../component/YourDonation'
import BillingSection from '../../component/BillingSection'

const DonatePage = () => {

  return (
    <div className="flex flex-col mt-[90px]">
      <div className="w-full relative">
        <img
          src={'/page-bg.jpg'}
          alt="background"
          className="max-h-[338px] w-full"
        />
      </div>
      <form className="flex lg:flex-row flex-col gap-8 lg:gap-8 mt-24 px-5 md:px-10 xl:px-24 justify-between mb-10">
        <BillingSection />
        <YourDonation />
      </form>
    </div>
  )
}

export default DonatePage
