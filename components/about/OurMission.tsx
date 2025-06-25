import React from 'react'
import Image from 'next/image'

export default function OurMission() {
    return (

        <div className='bg-[#F4F7FF] flex flex-col gap-4 p-6 md:p-10 rounded-[20px] w-full'>

            {/* 1ST ROW */}
            <div className="bg-[#F4F7FF] flex-wrap gap-8 flex ">
                 {/* Image Section */}
                <div className="relative flex-1 min-w-[280px] h-[300px] lg:w-[500px]">
                    <Image
                        src="/about/undraw_target_d6hf 1 (1).png"
                        alt="Team working together at HandyDandy"
                        fill
                        className="object-contain"
                    />
                </div>
                {/* Text Section */}
                <div className="flex-1 flex-col min-w-[280px] max-w-[800px] gap-2 flex justify-center">
                    <p className='text-[32px] font-semibold'>Our Mission</p>
                    <p className="text-[#333] text-[16px] leading-relaxed">
                        At HandyDandy.ae, our mission is to create a better world for both our clients and our workers. We are dedicated to enhancing the lives of our customers by providing exceptional cleaning and technical services while ensuring our team members thrive in a supportive and respectful environment. United by a shared purpose, we’re here to serve you and make a positive impact every step of the way.
                    </p>
                </div>
            
            </div>


          {/* 2ND Join Text Section */}
<div className="flex flex-wrap justify-center text-center gap-x-2 text-[#282828] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px]">
  <span className="font-[600]">JOIN HANDYDANDY.AE</span>
  <span className="font-[400] italic">TODAY</span>
</div>

 
        </div>

    );
}
