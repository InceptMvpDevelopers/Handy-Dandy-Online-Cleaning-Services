import React from 'react'
import InfoCard from './InfoCard'

export default function WhatMattersToUs() {
  return (

          <div className='p-16 flex flex-col gap-8 md:flex-row bg-[#0046D1] w-full rounded-[20px]'>
              <div className="flex flex-1 text-white text-[62px] gap-x-2  flex-col">
                        <span className="font-[600]">WHAT MATTERS</span>
                        <span className="font-[400] italic">TO US?</span>
                    </div>
<div className='flex flex-1 flex-col gap-2 justify-center'>
    
                        <p className='text-white italic font-light'>At HandyDandy.ae, we take pride in our values and commitment to customer satisfaction.</p>
                           <ul className='list-disc pl-5 text-white space-y-2'>
    <li>
      <span className="font-semibold">Exceptional Service</span> – Every service is done with precision, care, and attention to detail
    </li>
    <li>
      <span className="font-semibold">Sustainability</span> – We prioritize eco-friendly cleaning solutions that protect your health and the planet.
    </li>
    <li>
      <span className="font-semibold">Customer Trust</span> – Your home is your sanctuary, and we treat it with the utmost respect and professionalism
    </li>
  </ul>
                        
</div>
                 
          </div>

  )
}
