import Image from 'next/image'

const Partners = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-[700px] h-[307px] bg-[#674DF0] relative">
        <h1 className="text-white lg:text-4xl text-3xl font-bold mx-auto mt-28 lg:ml-32 w-[250px]">
          Clients we have worked with.
        </h1>
        <div className="absolute top-0 right-0 bg-[#29F0B4] h-[50px] w-[50px]"></div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mt-32 mt-10 lg:ml-10 px-5 lg:px-0 gap-10 w-full">
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
        <Image
          src={'/brand-img.png'}
          alt="brand-img"
          width={123}
          height={24}
          className="md:w-[123px] w-[100px] md:h-[24px] h-[20px]"
        />
      </div>
    </div>
  )
}

export default Partners
