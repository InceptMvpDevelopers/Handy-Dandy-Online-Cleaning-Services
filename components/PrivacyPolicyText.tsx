import React from 'react'

type parameters = {
    title: string
}

export default function PrivacyPolicytext({title}: parameters) {
  return (
   <div className="flex flex-col px-[20px] md:px-[50px] lg:px-[100px] rounded-3xl bg-[#F4F7FF] min-h-[360px] justify-center text-[#282828] text-[52px] gap-x-2  ">
             <span className="font-[600] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px]">
        {title}
      </span>
      <span className="font-[400] italic text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]">
        HandyDandy.ae
      </span>
                </div>
  )
}
