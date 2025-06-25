import React from 'react'
import InfoCard from './InfoCard'
import AchievementCard from './AchievementCard'

export default function OurAchievements() {
    return (

        <div className='p-4 bg-[#F4F7FF] flex flex-col w-full rounded-[20px]'>
       <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <span className="font-[600] text-[#282828] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px]">
    OUR ACHIEVEMENTS
  </span>

  <div className="flex mt-[-10px] gap-x-2 flex-wrap justify-center md:justify-start text-[#282828] text-[28px] sm:text-[36px] md:text-[46px] lg:text-[62px]">
    <span className="font-[600]">NUMBERS THAT SPEAK FOR</span>
    <span className="font-[400] italic">THEMSELVES</span>
  </div>
</div>


            <div className='flex flex-col max-w-[1300px] gap-5 flex-1 self-center'>
                <div className='flex flex-1 flex-wrap gap-5'>
                    <AchievementCard
                        title="10X Increase in Productivity"
                        description="Helping customers save time and energy "

                    />

                    <AchievementCard
                        title="5,000+ Happy Customers"
                        description=" Our community keeps growing every day!"

                    />                    </div>
                <div className='flex flex-1 flex-wrap gap-5'>
                    <AchievementCard
                        title="300% Return on Investment"
                        description="Ensuring affordability without compromising quality"

                    />

                    <AchievementCard
                        title=" 100+ Five-Star Reviews"
                        description=" Rated highly for excellence and reliability"

                    />                    </div>
            </div>
        </div>

    )
}
