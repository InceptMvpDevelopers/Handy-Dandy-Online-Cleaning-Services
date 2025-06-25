import React from 'react'
import InfoCard from './InfoCard'

export default function OurCommitment() {
  return (

          <div className='p-4 bg-[#F4F7FF] w-full rounded-[20px]'>
              <div className="flex text-[#282828] text-[52px] gap-x-2 text-center flex-wrap justify-center">
                        <span className="font-[600]">OUR COMMITMENT</span>
                        <span className="font-[400] italic">TO YOU</span>
                    </div>
                    <div className='flex  flex-wrap gap-5'>
                        <InfoCard
                                title="Reliability"
                                description="Always on time and delivering excellence from the get-go."
                                imageSrc="/about/verified_user.png" // Use your actual image path
                              />
                                                      <InfoCard
                                title="Quality"
                                description=" Our skilled and motivated team ensures meticulous attention to detail"
                                imageSrc="/about/editor_choice (1).png" // Use your actual image path
                              />
                                                      <InfoCard
                                title="Trust"
                                description="Your satisfaction is our priority, built on the same trust we foster within our team."
                                imageSrc="/about/handshake.png" // Use your actual image path
                              />
                                                      <InfoCard
                                title="Premium Materials"
                                description="Only the best products and tools from trusted partners for outstanding, lasting results."
                                imageSrc="/about/stacks.png" // Use your actual image path
                              />
                                                       <InfoCard
                                title="Convenience"
                                description="Our website brings simplicity and stress-free booking right to your fingertips."
                                imageSrc="/about/approval_delegation.png" // Use your actual image path
                              />
                                                       <InfoCard
                                title="Friendly Environment"
                                description="Our approach is to foster a friendly and sustainable environment by connecting people and services to create meaningful experiences."
                                imageSrc="/about/temp_preferences_eco.png" // Use your actual image path
                              />
                    </div>
          </div>

  )
}
