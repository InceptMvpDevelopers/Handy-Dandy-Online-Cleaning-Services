"use client"
import React from "react";
import BookingDetailsCard from '@/components/apply-form-all/Right-side';

const addons = [
  {
    title: "Ironing and Folding",
    price: "AED19",
    desc: "Crisp, wrinkle-free ironing and folding",
    img: "/end-user/1stcard.jpg",
  },
  {
    title: "Balcony Cleaning",
    price: "AED19",
    desc: "Refresh Your Outdoor Space!",
    img: "/end-user/2ndCard.jpg",
  },
  {
    title: "Fridge Cleaning",
    price: "AED19",
    desc: "Fresh, odor-free fridge cleaning",
    img: "/end-user/3rdCard.jpg",
  },
  {
    title: "Wardrobe Organising",
    price: "AED19",
    desc: "Crisp, wrinkle-free ironing ar folding",
    img: "/end-user/4thCard.jpg",
  },
];

export default function ApplyForm2() {
  return (
        <div className='flex flex-col lg:flex-row gap-6 p-8'>

            {/* left side */}
         <div className="bg-white flex flex-col flex-[2] min-w-0 rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Header and Date */}
        <div className="flex justify-between  items-center mb-6">
          <div>
            <span className="block text-xl font-semibold tracking-wide">POPULAR</span>
            <span className="block text-lg italic text-gray-400 font-light -mt-2">ADD-ONS</span>
          </div>
          <div className="text-xs text-gray-400  font-medium">Thursday 31/05/23</div>
        </div>
        {/* Stepper */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-100 rounded-full" />
          <div className="flex-1 h-1 bg-blue-100 rounded-full" />
        </div>
        {/* People also added */}
        <div className="flex justify-between items-center">
            <div className="mb-4 text-lg font-medium">People also added</div>
              <div className=" right-2 top-1/2  -translate-y-1/2 flex gap-2 z-10">
                <button className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow hover:bg-blue-50 transition"><span className="text-2xl">&#8592;</span></button>
                <button className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow hover:bg-blue-50 transition"><span className="text-2xl">&#8594;</span></button>
              </div>
        </div>
        {/* Add-ons Cards */}
    
          {/* Carousel Arrows */}
        
          <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {addons.map((addon, idx) => (
              <div
                key={addon.title}
                className="min-w-[250px] max-w-[260px] bg-white rounded-2xl border border-gray-100 shadow p-4 flex flex-col"
              >
                <img
                  src={addon.img}
                  alt={addon.title}
                  className="w-full h-32 object-cover rounded-xl mb-3"
                />
                <div className="font-semibold text-base leading-tight mb-1">{addon.title}</div>
                <div className="text-xs text-gray-400 font-medium mb-1">{addon.price}</div>
                <div className="text-sm text-gray-600 mb-2 min-h-[36px]">{addon.desc}</div>
                <a href="#" className="text-blue-700 text-sm font-semibold mb-3 hover:underline">Learn More</a>
                <button className="flex items-center justify-between border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 transition">
                  Add
                  <span className="ml-2 w-5 h-5 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg font-bold">+</span>
                </button>
              </div>
            ))}
          </div>
       
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10 gap-4">
          <button className="bg-gray-200 text-gray-500 font-medium rounded-full px-8 py-3 w-32">Cancel</button>
          <button className="text-blue-700 underline font-medium px-4 py-2">Back</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 w-32 transition-colors">Next</button>
        </div>
      </div>

      {/* right side */}
        <div className='flex flex-col  flex-1'>
            
                <BookingDetailsCard />
            
        </div>
      </div>
   
  );
}

