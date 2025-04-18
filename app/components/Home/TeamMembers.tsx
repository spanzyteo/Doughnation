import Image from 'next/image'
import React from 'react'

const TeamMembers = () => {
  return (
    <div className='lg:h-[850px] md:h-[1300px] h-[1880px]'>
      <div className="bg-[url('/bg-2.jpg')] bg-cover bg-center w-full h-[570px] mt-10 flex justify-center flex-col">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-center gap-4 lg:mt-[26rem] md:mt-[58rem] mt-[94rem]">
            <div className="bg-[#29F0B4] h-[10px] w-[10px]"></div>
            <h1 className="text-xl text-white">Meet Our Team Members</h1>
          </div>
          <h1 className="lg:text-6xl text-3xl font-bold mt-6 text-white">
            Experienced People
          </h1>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-0">
            <div className="flex flex-col">
              <Image
                src={'/review-img.jpg'}
                alt="review"
                width={370}
                height={407}
                className="sm:w-[370px] w-full h-[407px] object-cover"
              />
              <div className="bg-[#F7F7F9] sm:w-[370px] w-full h-[120px] border-b border-b-[#E9E9EE] flex flex-col items-center">
                <h1 className="font-bold text-4xl mt-5">Larry Schmidt</h1>
                <h1 className="mt-4 text-[#838694]">Student</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src={'/review-img1.jpg'}
                alt="review"
                width={370}
                height={407}
                className="sm:w-[370px] w-full h-[407px] object-cover"
              />
              <div className="bg-[#F7F7F9] sm:w-[370px] w-full h-[120px] border-b border-b-[#E9E9EE] flex flex-col items-center">
                <h1 className="font-bold text-4xl mt-5">David Hardson</h1>
                <h1 className="mt-4 text-[#838694]">Co-Founder</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src={'/review-img2.jpg'}
                alt="review"
                width={370}
                height={407}
                className="sm:w-[370px] w-full h-[407px] object-cover"
              />
              <div className="bg-[#F7F7F9] sm:w-[370px] w-full h-[120px] border-b border-b-[#E9E9EE] flex flex-col items-center">
                <h1 className="font-bold text-4xl mt-5">Jean Smith</h1>
                <h1 className="mt-4 text-[#838694]">Managing Director</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
