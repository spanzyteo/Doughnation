'use client'
import Link from 'next/link'
import { Parallax } from 'react-parallax'

const CreativitySection = () => {
  return (
    <>
      <Parallax
        bgImage={'/creativity-img.jpg'}
        strength={500}
        bgImageStyle={{
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          objectFit: 'cover', // Ensures the image maintains its aspect ratio
        }}
        className="h-[552px] w-full mt-20"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[#29F0B4] mt-16 lg:mt-32 text-lg lg:text-2xl">
            The World is filled with creativity
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mt-8 text-white text-center lg:w-[900px] lg:leading-[5rem] leading-[3rem]">
            Together We can Bring More Creativity into the World
          </h1>
          <Link href={'/add-project'} className="uppercase mt-16 bg-[#29F0B4] px-9 py-5 text-white hover:bg-black cursor-pointer transition-all duration-500 ease-in-out">
            START A PROJECT
          </Link>
        </div>
      </Parallax>
    </>
  )
}

export default CreativitySection