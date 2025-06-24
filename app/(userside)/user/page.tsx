import React from 'react'
import Navbar from '@/components/enduser/Navbar'
import Image from 'next/image'
import DownloadsSection from '@/components/enduser/DownloadsSection'

export default function User() {
  return (
    <div className="flex flex-col bg-[url('/end-user/website-banner.svg')] bg-no-repeat bg-cover bg-center ">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-8 py-12 gap-8">

        {/* Left Text */}
        <div className="text-center md:text-left leading-tight">
          <p className="text-[62px] font-[600]">Effortless</p>
          <p className="text-[62px] font-[400] italic">Services,</p>
          <p className="text-[62px] font-[600]">Exceptional</p>
          <p className="text-[62px] font-[600]">Experiences</p>
        </div>

        {/* Right Image */}
        <div className="relative w-[300px] md:w-[593px] h-[300px] md:h-[593px]  md:mb-[-180px]">
          <Image
            src="/end-user/phone-picture-front.svg"
            alt="Phone Picture"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <DownloadsSection />
    </div>
  )
}
