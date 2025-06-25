import React from 'react'
import { MdEmail } from "react-icons/md";

export default function Newsletter() {
  return (
    <div className='shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] p-6 bg-white flex flex-col flex-wrap md:flex-row flex-1 gap-5'>
        <div className='relative flex-col gap-4 flex flex-1 '>
  <div className='flex items-center flex-col flex-wrap md:flex-row gap-4'>
      <div className="flex flex-1 text-[#282828] text-[52px] gap-x-2 flex-wrap ">
                        <span className="font-[600]">JOIN OUR</span>
                        <span className="font-[400] italic">NEWSLETTER</span>
                    </div>

                    <div className='flex flex-1'><span className="font-normal text-gray-500">Want the latest updates on our cleaning, maintenance, and technical services, exclusive discounts, and more? Subscribe to our newsletter today!
</span></div>
  </div>
 <span className="font-normal ">Book your service now and experience Dubai’s most reliable team for cleaning, maintenance, and technical services!</span>
    <div className="flex flex-col md:flex-row flex-wrap items-center gap-3 w-full">
      <div className="flex px-6 items-center border border-gray-300 flex-1 gap-3 h-[83px] rounded-full w-full md:w-auto">
        <MdEmail className="text-gray-300" />
        <input
          type="text"
          placeholder="Your Email"
          className="flex-1 h-[83px] bg-transparent focus:outline-none"
        />
      </div>

      <button className="text-white bg-blue-700 rounded-full h-[83px] w-full md:w-[195px]">
        Join Now
      </button>
    </div>
        </div>

        
        
    </div>
  )
}
