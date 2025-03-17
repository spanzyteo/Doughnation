import Image from 'next/image'
import React from 'react'

const TeamMembers = () => {
  return (
    <div className="relative w-full mt-10 flex justify-center">
      <Image
        src={'/bg-2.jpg'}
        alt="img"
        height={500}
        width={800}
        className="w-full h-[570px] object-cover"
      />
      <div className="flex flex-col justify-center items-center absolute top-28 ">
        <div className="flex items-center gap-4">
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
  )
}

export default TeamMembers
