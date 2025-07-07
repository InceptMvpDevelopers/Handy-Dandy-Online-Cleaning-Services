"use client"
import React from "react";
import BookingDetailsCard from '@/components/apply-form-all/Right-side';
import Footer from '@/components/enduser/Footer';
import Navbar
 from '@/components/enduser/Navbar';
 import { useRouter } from "next/navigation";
 import {  useDispatch, useSelector } from "react-redux";
 import { RootState } from "@/store";
import { fetchAddOns } from "@/store/add_onsSlice";
import { useEffect } from "react";
import { resetApplyForm } from "@/store/applyFormSlice";


import AddOnCard from "@/components/apply-form-all/AddOnCard";
import { Staatliches } from "next/font/google";


export default function ApplyForm2() {
    const dispatch = useDispatch();
      const {addOns} = useSelector((state:RootState)=>state.addOn);
    const {selectedDate, selectedTime} = useSelector((state:RootState)=>state.applyForm)
    
     useEffect(() => {
       if(addOns.length == 0){
     dispatch<any>(fetchAddOns());
   }
   }, [dispatch, addOns])
   
   
      
  const router = useRouter();

const handleContinue = () => {
router.push('/apply-form-3')
}

  return (
       <div className='flex flex-col'>

<Navbar />
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
              {addOns.map((addon, idx) => (
                <AddOnCard key={addon.id} addOn={addon}/>
              ))}
            </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10 gap-4">
            <button onClick={()=> {dispatch(resetApplyForm())
                               router.push('/home')}} className="bg-gray-200 text-gray-500 font-medium rounded-full px-8 py-3 w-32">Cancel</button>
            <button onClick={()=> router.back()} className="text-blue-700 underline font-medium px-4 py-2">Back</button>
            <button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 w-32 transition-colors">Next</button>
          </div>
                </div>
          
                {/* right side */}
          <div className='flex flex-col  flex-1'>
          
                  <BookingDetailsCard />
          
          </div>
                </div>
        <Footer />
        </div>
   
  );
}

