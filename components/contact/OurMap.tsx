import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Image from 'next/image';

export default function OurMap() {
  return (
    <div className='min-h-[500px] flex flex-col flex-wrap md:flex-row flex-1 gap-5'>
        <div className='relative  flex flex-1 '>
            <Image 
            src="/contact/Rectangle (1).png"
             alt="Contact Map"
                fill
    className="object-fill"
             />
        </div>

          <div className='flex flex-1 flex-col gap-2'>
            <p className='text-[32px] font-normal text-[#282828]'>Find Us on the Map</p>
             <p className='text-[18px] font-light text-[#282828]'>Easily locate our office and visit us if needed. Click "View Map" for directions.</p>
       
          <div className='flex items-center gap-2'>
          
               <div className='bg-blue-600 rounded-full p-1.5'>
                <IoLocationSharp  className='text-white'/>
            </div>
                 <p className='text-[18px] font-light text-[#282828]'>The Binary by Omniyat
Marasi Drive, Business Bay
19th Floor, Office 1914
P.O. Box 83625, Dubai, UAE
</p>

          </div>
       
        </div>
    </div>
  )
}
