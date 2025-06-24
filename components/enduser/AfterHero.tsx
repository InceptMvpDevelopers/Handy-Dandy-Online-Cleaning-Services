import React from "react";
import ServiceCard from "./Servicecard";

export default function AfterHero() {
  return (
    <div className="flex flex-col gap-12 px-4 sm:px-8 py-8">
      {/* Header */}
      <div>
        <div className="flex text-[36px] sm:text-[52px] gap-x-2">
          <span className="font-[600]">WHAT WE </span>
          <span className="font-[400] italic">PROVIDE</span>
        </div>

        <div className="flex text-[24px] sm:text-[36px] gap-x-2">
          <span className="font-[600]">General</span>
          <span className="font-[400] italic">Cleaning</span>
        </div>
      </div>

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

      {/* Technical Services Heading */}
      <div className="flex text-[24px] sm:text-[36px] gap-x-2">
        <span className="font-[600]">Technical</span>
        <span className="font-[400] italic">SERVICES</span>
      </div>

      {/* Technical Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <ServiceCard
          title="Space"
          title2="Cleaning"
          main_image="/end-user/10thCard.jpg"
          icon_image="/end-user/vacuum.png"
          description="Transform your home into a haven of cleanliness with our meticulous home cleaning services"
          isService={true}
        />
        <ServiceCard
          title="Deep"
          title2="Cleaning"
          main_image="/end-user/6thcard.jpg"
          icon_image="/end-user/vacuum.png"
          description="Deep Cleaning, Designed for You—Effortless, Thorough, and Hassle-Free."
          isService={true}
        />
        <ServiceCard
          title="Furniture"
          title2="Cleaning"
          main_image="/end-user/7thcard.jpg"
          icon_image="/end-user/vacuum.png"
          description="Transform your home into a haven of cleanliness with our meticulous home cleaning services"
          isService={true}
        />
        <ServiceCard
          title="Water Tank"
          title2="Cleaning"
          main_image="/end-user/8thcard.jpg"
          icon_image="/end-user/vacuum.png"
          description="Thorough and professional cleaning to remove contaminants and ensure safe, hygienic water storage"
          isService={true}
        />
        <ServiceCard
          title="AC"
          title2="Cleaning"
          main_image="/end-user/9th.jpg"
          icon_image="/end-user/vacuum.png"
          description="Comprehensive cleaning to improve air quality and ensure your AC system runs efficiently"
          isService={true}
        />
      </div>
            {/* Technical Services Heading */}
      <div className="flex text-[24px] sm:text-[36px] gap-x-2">
        <span className="font-[600]">Interior</span>
        <span className="font-[400] italic">DESIGN</span>
      </div>

            {/* Iterior Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <ServiceCard
          title="Surface"
          title2="Finishes"
          main_image="/end-user/10thCard.jpg"
          icon_image="/end-user/vacuum.png"
          description="Finishes"
          isInterior={true}
        />
        <ServiceCard
          title="Deep"
          title2="Fit-Outs"
          main_image="/end-user/6thcard.jpg"
          icon_image="/end-user/vacuum.png"
          description="Fit-Outs"
          isInterior={true}
        />
       
      </div>
    </div>
  );
}
