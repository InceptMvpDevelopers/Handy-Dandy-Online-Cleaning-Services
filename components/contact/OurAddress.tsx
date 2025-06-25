import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function OurAddress() {
  return (
    <div className='flex flex-col flex-wrap md:flex-row flex-1 gap-5'>
        <div className='flex flex-1 '>
            <p className='text-[18px] font-light text-gray-500'>Need assistance? Have a question about our wide range of services? Get in touch with us today! Our team is always ready to assist you with bookings, service inquiries, or any other support you may need.
            </p>
        </div>

          <div className='flex flex-1 flex-col gap-2'>
            <p className='text-[32px] font-normal text-[#282828]'>Our Address</p>
             <p className='text-[18px] font-light text-[#282828]'>The Binary by Omniyat
Marasi Drive, Business Bay
19th Floor, Office 1914
P.O. Box 83625, Dubai, UAE
</p>
         <p className='text-[32px] font-normal text-[#282828]'>Get in touch</p>
          <div className='flex items-center gap-2'>
            <div className='bg-blue-600 rounded-full p-1.5'>
                <MdEmail className='text-white'/>
            </div>

              <p className='text-[18px] font-light text-[#282828]'>hello@handydandy.ae</p>
          </div>
          <div className='flex items-center mt-1 gap-2'>
            <div className='bg-blue-600 rounded-full p-1.5'>
                <FaPhone  className='text-white'/>
            </div>

              <p className='text-[18px] font-light text-[#282828]'>hello@handydandy.ae</p>
          </div>
        </div>
    </div>
  )
}
