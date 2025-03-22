'use client'
import ContactDetails from "../components/ContactDetails"

const ContactUs = () => {
  return (
    <div className="flex flex-col mt-[90px]">
      <div className="w-full relative">
        <img
          src={'/page-bg.jpg'}
          alt="background"
          className="max-h-[338px] w-full"
        />
        <h1 className="absolute top-1/2 left-24 font-bold text-white text-2xl md:text-5xl">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 mt-24 px-5 md:px-10 xl:px-28">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
            <h1 className="text-xl text-[#674DF0]">Contact Us Now</h1>
          </div>
          <h1 className="mt-6 font-bold lg:text-6xl md:text-4xl text-3xl w-auto">
            Write Us a Message
          </h1>
          <h1 className="mt-6 leading-[33px] max-w-[800px] text-[#838694] text-[17px]">
            There are many variations of passages of available but the majority
            have in some form, by injected humou or words which don’t look even
            slightly believable.
          </h1>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex sm:flex-row flex-col gap-8">
            <input
              type="text"
              placeholder="Your Name*"
              className="h-[68px] bg-[#F7F7F9] w-full px-5 text-[#838694] text-[17px] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="h-[68px] bg-[#F7F7F9] w-full px-5 text-[#838694] text-[17px] focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Your Subject"
            className="h-[68px] bg-[#F7F7F9] w-full px-5 text-[#838694] text-[17px] focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="bg-[#F7F7F9] w-full px-5 text-[#838694] text-[17px] focus:outline-none pt-5"
            rows={5}
          />
          <button className="relative font-medium w-[50%] bg-[#29F0B4] text-black px-[15px] py-[20px] text-[17px] cursor-pointer transition-all overflow-hidden group">
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">
              SEND MESSAGE
            </span>
            <div className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center"></div>
          </button>
        </div>
      </div>
      <ContactDetails />
    </div>
  )
}

export default ContactUs
