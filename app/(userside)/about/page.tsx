import React from 'react'
import Navbar from '@/components/enduser/Navbar'
import DescriptionSection from '@/components/about/DescriptionSection'

export default function page() {
  return (
    <div>
        <div className="flex flex-col bg-[url('/about/hero_image.jpg')] bg-no-repeat bg-cover bg-center rounded-sm min-h-[975px] justify-between pb-[80px] ">
            <Navbar />
            {/* Hero Section */}
     
              {/* Left Text */}
              <div className="px-[80px] text-center md:text-left leading-tight">
                <p className="text-[62px] font-[600] text-white">ABOUT US</p>
                              </div>
      
        
     
          
          </div>
          <DescriptionSection />
    </div>
  )
}
