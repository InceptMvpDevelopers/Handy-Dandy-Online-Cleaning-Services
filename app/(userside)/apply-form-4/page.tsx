"use client";
import React, { useState } from "react";
import Footer from '@/components/enduser/Footer';
import Navbar from '@/components/enduser/Navbar';
import BookingDetailsCard from "@/components/apply-form-all/Right-side";

export default function ApplyForm4() {
  const [selectedDate] = useState("Thursday 31/05/23");
  const [form, setForm] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
    country: "United States",
    zip: ""
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />


         <div className='flex flex-col lg:flex-row gap-6 p-8'>
            <div className="bg-white flex flex-col flex-[2] rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide">CHECKOUT</h1>
          <div className="flex items-center text-gray-400 text-base font-medium gap-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" fill="none"/><path d="M7 2v2M17 2v2M3 7h18M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="11" width="2" height="2" rx="1" fill="#BDBDBD"/><rect x="11" y="11" width="2" height="2" rx="1" fill="#BDBDBD"/><rect x="15" y="11" width="2" height="2" rx="1" fill="#BDBDBD"/></svg>
            <span>{selectedDate}</span>
          </div>
        </div>
        {/* Stepper */}
        <div className="w-full  flex items-center gap-2 mb-12">
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
        </div>
        {/* Card Form */}
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <span className="block text-gray-500 text-sm font-medium mb-2">Card information</span>
            <div className="flex items-center gap-2 mb-2">
              <input type="text" placeholder="1234 1234 1234 1234" className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" maxLength={19} value={form.cardNumber} onChange={e => setForm(f => ({...f, cardNumber: e.target.value}))} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6 w-8 object-contain" />
              <img src="/apply-form/Processor.png" alt="Mastercard" className="h-6 w-8 object-contain" />
              <img src="/apply-form/Processor (1).png" alt="Discover" className="h-6 w-8 object-contain" />
              <img src="/apply-form/Processor (2).png" alt="Discover" className="h-6 w-8 object-contain" />
            </div>
            <div className="flex gap-2 mb-2">
              <input type="text" placeholder="MM / YY" className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" maxLength={5} value={form.expiry} onChange={e => setForm(f => ({...f, expiry: e.target.value}))} />
              <input type="text" placeholder="CVC" className="w-24 rounded-md border border-gray-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" maxLength={4} value={form.cvc} onChange={e => setForm(f => ({...f, cvc: e.target.value}))} />
            </div>
          </div>
          <div className="w-full mb-4">
            <span className="block text-gray-500 text-sm font-medium mb-2">Cardholder name</span>
            <input type="text" placeholder="Full name on card" className="w-full rounded-md border border-gray-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
          </div>
          <div className="w-full mb-4">
            <span className="block text-gray-500 text-sm font-medium mb-2">Country or region</span>
            <select className="w-full rounded-md border border-gray-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200 mb-2" value={form.country} onChange={e => setForm(f => ({...f, country: e.target.value}))}>
              <option>United States</option>
              <option>United Arab Emirates</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="ZIP" className="w-full rounded-md border border-gray-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-200" value={form.zip} onChange={e => setForm(f => ({...f, zip: e.target.value}))} />
          </div>
          <button className="w-full bg-black text-white font-semibold rounded-md py-3 text-base mb-4">Pay</button>
          <p className="text-xs text-gray-400 text-center">By clicking Pay, you agree to the Link Terms and Privacy Policy.</p>
        </div>
        {/* Navigation Buttons */}
        <div className="w-full  flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
          <button className="bg-gray-200 text-gray-500 font-medium rounded-full px-8 py-3 w-32">Cancel</button>
          <button className="text-blue-700 underline font-medium px-4 py-2">Back</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 w-full sm:w-[250px] transition-colors">Confirm and submit</button>
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
