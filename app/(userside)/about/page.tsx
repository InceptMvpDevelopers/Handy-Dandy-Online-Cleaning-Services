import React from 'react'
import Navbar from '@/components/enduser/Navbar'
import DescriptionSection from '@/components/about/DescriptionSection'
import WhatWeDo from '@/components/about/WhatWeDo'
import OurCommitment from '@/components/about/OurCommitment'
import WhatMattersToUs from '@/components/about/WhatMattersToUs'
import OurAchievements from '@/components/about/OurAchievements'
import OurMission from '@/components/about/OurMission'
import Footer from '@/components/enduser/Footer'

export default function page() {
  return (
    <div>
        <div className="flex flex-col bg-[url('/about/hero_image.jpg')] bg-no-repeat bg-cover bg-center rounded-sm min-h-[975px] justify-between pb-[80px] ">
            <Navbar />

     
              {/* Left Text */}
        <div className="px-[20px] md:px-[80px] text-center md:text-left leading-tight">
    <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-[700] text-white">
      ABOUT US
    </p>
  </div>
      
        
     
          
          </div>
          <div className='flex flex-col gap-6 p-4 md:p-10'>
            <DescriptionSection />
            <WhatWeDo />
            <OurCommitment />
            <WhatMattersToUs />
            <OurAchievements />
            <OurMission />
          </div>

          <Footer showBook={true}/>
    </div>
  )
}
