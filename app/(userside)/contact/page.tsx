import ContactUs from '@/components/contact/ContactUs'
import OurAddress from '@/components/contact/OurAddress'
import Navbar from '@/components/enduser/Navbar'
import React from 'react'
import OurMap from '@/components/contact/OurMap'
import Newsletter from '@/components/contact/Newsletter'
import Footer from '@/components/enduser/Footer'

export default function page() {
  return (
    <div >
      <Navbar />
      <div className='flex flex-col p-8 gap-6'>
      <ContactUs />
      <OurAddress />
      <OurMap />
      <Newsletter />
    </div>
    <Footer />  
    </div>
  )
}
