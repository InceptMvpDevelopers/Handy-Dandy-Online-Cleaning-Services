import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { discounts } from '@/store/applyFormSlice';
import AddOnCardCart from './AddonCardCart';


const BookingDetailsCard = () => {
  
  const {selectedService, selectedHours, professionalsCount, needMaterials, instructions, selectedFrequency, total, discount, grandTotal, selectedAddOns, selectedDate, selectedTime} = useSelector((state: RootState)=>state.applyForm);
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
  
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-500 font-medium">Address</span>
          <span className="text-right text-gray-700 font-normal max-w-[60%]">Al Fattan Tower - Jumeirah Beach Residence - Dubai - United Arab Emirates</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-500 font-medium">Service</span>
          <span className="text-gray-700 font-normal">{selectedService?.title}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-500 font-medium">Service Details</span>
          <span className="text-gray-700 font-normal text-right">{selectedService?.description}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-500 font-medium">Duration</span>
          <span className="text-gray-700 font-normal">{selectedHours} hours</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-500 font-medium">Number of Professionals</span>
          <span className="text-gray-700 font-normal">{professionalsCount}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-500 font-medium">Material</span>
          <span className="text-gray-700 font-normal">{needMaterials}</span>
        </div>
            
            {selectedDate && (  <div className="flex justify-between py-2">
          <span className="text-gray-500 font-medium">Date</span>
          <span className="text-gray-700 font-normal">{selectedDate}</span>
        </div>)}
            
           {
            selectedTime && (
               <div className="flex justify-between py-2">
          <span className="text-gray-500 font-medium">Time</span>
          <span className="text-gray-700 font-normal">{selectedTime}</span>
        </div>
             )
           }
            


        {/* Addons Add To Cart */}
    <div className='flex flex-col gap-3'>
      {selectedAddOns.map((s)=> {
                    return (
                      <div key={s.addon.id}>
              <AddOnCardCart addOn={s.addon}/>
                      </div>
                    )
                  })}
    </div>
      </div>


      <div className="bg-[#fafbfc] rounded-xl p-4 border border-gray-100">
        <h3 className="text-base font-semibold mb-2">Payment Summary</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">Sub Total</span>
          <span className="text-blue-600 font-bold ">AED {total}</span>
        </div>
          <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">Discount  ({discounts[selectedFrequency || 'express']}%)</span>
          <span className="text-gray-700 text-lg"> AED {discount} 
</span>
        </div>
          <div className="flex justify-between items-center">
          <span className="text-gray-500 font-medium">Grand Total</span>
          <span className="text-blue-600 font-bold text-lg">AED {grandTotal}</span>
        </div>
     
      </div>
    </div>
  );
};

export default BookingDetailsCard;
