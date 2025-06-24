import React from 'react'
import Image from 'next/image'

export default function DescriptionSection() {
  return (
    <div className="flex p-4 md:p-10 justify-center">
      <div className="bg-[#F4F7FF] flex flex-wrap gap-8 p-6 md:p-10 rounded-[20px] w-full max-w-[80%]">
        
        {/* Text Section */}
        <div className="flex-1 min-w-[280px] max-w-[800px] flex items-center">
          <p className="text-[#333] text-[16px] leading-relaxed">
            At HandyDandy.ae, we pride ourselves on being more than just a service provider.
            We're a close-knit team founded on friendship, trust, and mutual respect.
            Our experienced professionals are individuals we’ve had the joy of connecting with throughout our time in beloved Dubai.
            Each employee plays a vital role in our journey, and together, we've developed this app to streamline your life while fostering a positive and respectful work environment for our team.
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
    </div>
  );
}
