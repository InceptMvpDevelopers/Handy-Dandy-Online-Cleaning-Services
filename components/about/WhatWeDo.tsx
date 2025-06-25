import React from 'react'
import Image from 'next/image'

export default function WhatWeDo() {
  return (

      <div className="flex flex-wrap gap-8 p-6 md:p-10 rounded-[20px] w-full ">
        
        {/* Text Section */}
        <div className="flex-1 flex-col min-w-[280px] max-w-[800px] flex ">
    
                  <div className="flex text-[#282828] text-[52px] gap-x-2  flex-wrap ">
                        <span className="font-[600]">WHY WE</span>
                        <span className="font-[400] italic">DO</span>
                    </div>
                      <span className="font-[600]  text-[#282828]  mt-[-20px] text-[52px] ">WHAT WE DO </span>
    
          <p className="text-gray-500 text-[16px] font-light leading-relaxed">
            Founded with a purpose beyond delivering exceptional cleaning and technical services, HandyDandy.ae stands against any form of worker mistreatment. We believe in fair treatment, dignity, and respect for every team member, empowering them to provide top-tier service with confidence and pride.

          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 min-w-[280px] h-[300px] lg:w-[500px]">
          <Image 
            src="/about/aboutdescription.png"
            alt="Team working together at HandyDandy"
            fill
            className="object-contain"
          />
        </div>
        
     
    </div>
  );
}
