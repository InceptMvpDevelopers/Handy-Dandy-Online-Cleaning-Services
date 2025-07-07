"use client"
import BookingDetailsCard from '@/components/apply-form-all/Right-side';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/enduser/Footer';
import Navbar
 from '@/components/enduser/Navbar';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import {
  setSelectedHours,
  setProfessionalsCount,
  setNeedMaterials,
  setInstructions,
  setSelectedFrequency,
  resetApplyForm
} from '@/store/applyFormSlice';



const hours = [1, 2, 3, 4, 5, 6, 7];
const professionals = [1, 2, 3, 4];

export default function ApplyForm() {
  const dispatch = useDispatch();
  const {
    selectedService,
    selectedHours,
    professionalsCount,
    needMaterials,
    instructions,
    selectedFrequency
  } = useSelector((state: RootState) => state.applyForm);

  const router = useRouter();


  useEffect(()=> {
if (!selectedService){
  router.push('/home');
}
  },[])
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex flex-col lg:flex-row gap-6 p-8'>
      
            <div className="bg-white flex flex-col flex-[2] rounded-2xl shadow-xl p-6 sm:p-10">
              {/* Header and Date */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="block text-xl font-semibold tracking-wide">SPACE</span>
                  <span className="block text-lg italic text-gray-400 font-light -mt-2">CLEANING</span>
                </div>
                <div className="text-xs text-gray-400 font-medium">Thursday 31/05/23</div>
              </div>
              {/* Stepper */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex-1 h-1 bg-blue-300 rounded-full" />
                <div className="flex-1 h-1 bg-blue-100 rounded-full" />
                <div className="flex-1 h-1 bg-blue-100 rounded-full" />
                <div className="flex-1 h-1 bg-blue-100 rounded-full" />
              </div>
              {/* Q1 */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-900">1. How many hours do you need your professional to stay</label>
                <div className="flex flex-wrap gap-3">
                  {hours.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => dispatch(setSelectedHours(h))}
                      className={`w-12 h-12 rounded-xl border text-lg font-medium transition-all duration-150 ${selectedHours === h ? 'bg-blue-50 border-blue-500 text-blue-600 shadow' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'}`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
              {/* Q2 */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-900">2. How many professionals do you need?</label>
                <div className="flex flex-wrap gap-3">
                  {professionals.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => dispatch(setProfessionalsCount(p))}
                      className={`w-12 h-12 rounded-xl border text-lg font-medium transition-all duration-150 ${professionalsCount === p ? 'bg-blue-50 border-blue-500 text-blue-600 shadow' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              {/* Q3 - Materials */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-900">3. Need cleaning materials? <span className="text-xs text-gray-400">(Powered by HandyDandy Kit)</span></label>
                <div className="flex gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => dispatch(setNeedMaterials('no'))}
                    className={`px-4 py-2 rounded-xl border font-medium transition-all duration-150 ${needMaterials === 'no' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'}`}
                  >
                    No, I have them
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(setNeedMaterials('yes'))}
                    className={`px-4 py-2 rounded-xl border font-medium transition-all duration-150 ${needMaterials === 'yes' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'}`}
                  >
                    Yes, please
                  </button>
                </div>
              </div>
              {/* Q4 - Instructions */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-900">3. Any instructions or special requirements?</label>
                <textarea
                  className="w-full min-h-[60px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Key under the mat, ironing, window cleaning, etc"
                  value={instructions}
                  onChange={e => dispatch(setInstructions(e.target.value))}
                />
              </div>
              {/* Q5 - Frequency */}
              <div className="mb-6">
                <label className="block font-medium mb-2 text-gray-900">3. How Often do you need cleaning?</label>
                <div className="flex flex-col gap-4">
                  {/* Express Booking */}
                  <button
                    type="button"
                    onClick={() => dispatch(setSelectedFrequency('express'))}
                    className={`w-full text-left rounded-2xl border transition-all duration-150 px-5 py-4 ${selectedFrequency === 'express' ? 'border-blue-500 bg-blue-50 shadow' : 'border-blue-200 bg-white hover:border-blue-400'}`}
                  >
                    <div className="font-bold text-lg mb-1">Express Booking</div>
                    <ul className="list-disc ml-5 text-gray-700 text-sm">
                      <li>Book a one-time cleaning session</li>
                    </ul>
                  </button>
                  {/* Weekly */}
                  <button
                    type="button"
                    onClick={() => dispatch(setSelectedFrequency('weekly'))}
                    className={`w-full text-left rounded-2xl border transition-all duration-150 px-5 py-4 relative ${selectedFrequency === 'weekly' ? 'border-blue-500 bg-blue-50 shadow' : 'border-blue-200 bg-white hover:border-blue-400'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between">
                      <p className="font-bold text-lg mb-1">Weekly</p>
                      <p className="bg-orange-50 w-fit text-orange-500 text-xs font-semibold rounded-full px-3 py-1 right-5 top-5">- 10% Per Visit</p>
                    </div>
                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1">
                      <li>Same cleaner every time—book weekly visits and reschedule easily.</li>
                      <li>Reliable cleaning, tailored to you.</li>
                      <li>Consistent, quality cleaning—secure recurring visits and adjust via the app anytime.</li>
                    </ul>
                  </button>
                  {/* Multiple Times a Week */}
                  <button
                    type="button"
                    onClick={() => dispatch(setSelectedFrequency('multi'))}
                    className={`w-full text-left rounded-2xl border transition-all duration-150 px-5 py-4 relative ${selectedFrequency === 'multi' ? 'border-blue-500 bg-blue-50 shadow' : 'border-blue-200 bg-white hover:border-blue-400'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between">
                      <span className="font-bold text-lg mb-1">Multiple Times a Week</span>
                      <span className="bg-orange-50 text-orange-500 text-xs font-semibold rounded-full px-3 py-1 right-5 top-5">15% Per Visit</span>
                    </div>
                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1">
                      <li>Same cleaner every time—book multiple weekly visits and reschedule easily.</li>
                      <li>Reliable cleaning, tailored to you</li>
                      <li>Consistent, quality cleaning—secure recurring visits and adjust via the app anytime.</li>
                    </ul>
                  </button>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-between items-center mt-8 gap-4">
                <button onClick={()=> {dispatch(resetApplyForm())
                   router.back()}} className="bg-gray-200 text-gray-500 font-medium rounded-full px-8 py-3 w-32">Cancel</button>
                <button 
                onClick={()=> {router.push('/apply-form-2')}}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 w-32 transition-colors">Next</button>
              </div>
            </div>
          <div className='flex flex-col  flex-1'>
      
                  <BookingDetailsCard />
      
          </div>
      </div>
      <Footer />
    </div>
  );
}
