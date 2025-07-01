"use client"
import React from 'react'
import Navbar from '@/components/enduser/Navbar'
import Image from 'next/image'
import DownloadsSection from '@/components/enduser/DownloadsSection'
import AfterHero from '@/components/enduser/AfterHero'
import BookOurService from '@/components/enduser/BookOurService'
import HowItWorks from '@/components/enduser/HowItWorks'
import WhyChooseUs from '@/components/enduser/WhyChooseUs'
import ClientSuccessStories from '@/components/enduser/ClientSuccessStories'
import FAQs from '@/components/enduser/FAQs'
import Footer from '@/components/enduser/Footer'




export default function User() {

  return (
    <div>
      <div className="flex flex-col bg-[url('/end-user/website-banner.svg')] bg-no-repeat bg-cover bg-center rounded-sm ">
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
      <div className='p-2 md:p-4 lg:p-8'>
       <AfterHero />
       <div className='flex max-w-[1400px]  mx-auto  self-center  justify-center'>
<BookOurService />
       </div>
       <HowItWorks />
       <WhyChooseUs />
       <ClientSuccessStories />
       <FAQs />

       </div>
         <Footer />

        
    </div>
  )
}
