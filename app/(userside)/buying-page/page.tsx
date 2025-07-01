import React from 'react'
import Navbar from '@/components/enduser/Navbar'
import ServiceCard from '@/components/enduser/Servicecard'

export default function page() {
  return (
    <div>
        <Navbar />

         {/* General Cleaning Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <ServiceCard
                  title="Space"
                  title2="Cleaning"
                  main_image="/end-user/1stcard.jpg"
                  icon_image="/end-user/vacuum.png"
                  description="Transform your home into a haven of cleanliness with our meticulous home cleaning services"
                />
                <ServiceCard
                  title="Deep"
                  title2="Cleaning"
                  main_image="/end-user/2ndcard.jpg"
                  icon_image="/end-user/vacuum.png"
                  description="Deep Cleaning, Designed for You—Effortless, Thorough, and Hassle-Free."
                />
                <ServiceCard
                  title="Furniture"
                  title2="Cleaning"
                  main_image="/end-user/3rdcard.jpg"
                  icon_image="/end-user/vacuum.png"
                  description="Transform your home into a haven of cleanliness with our meticulous home cleaning services"
                />
                <ServiceCard
                  title="Water Tank"
                  title2="Cleaning"
                  main_image="/end-user/4thcard.jpg"
                  icon_image="/end-user/vacuum.png"
                  description="Thorough and professional cleaning to remove contaminants and ensure safe, hygienic water storage"
                />
                <ServiceCard
                  title="AC"
                  title2="Cleaning"
                  main_image="/end-user/5thcard.jpg"
                  icon_image="/end-user/vacuum.png"
                  description="Comprehensive cleaning to improve air quality and ensure your AC system runs efficiently"
                />
              </div>
    </div>
  )
}
