import React from 'react';

const BookingDetailsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-300 font-medium">Address</span>
          <span className="text-right text-gray-700 font-normal max-w-[60%]">Al Fattan Tower - Jumeirah Beach Residence - Dubai - United Arab Emirates</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-300 font-medium">Service</span>
          <span className="text-gray-700 font-normal">Home Cleaning</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-300 font-medium">Service Details</span>
          <span className="text-gray-700 font-normal text-right">1x Ironing and Folding</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-300 font-medium">Duration</span>
          <span className="text-gray-700 font-normal">2 hours</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-300 font-medium">Number of Professionals</span>
          <span className="text-gray-700 font-normal">2</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-300 font-medium">Material</span>
          <span className="text-gray-700 font-normal">No</span>
        </div>
      </div>
      <div className="bg-[#fafbfc] rounded-xl p-4 border border-gray-100">
        <h3 className="text-base font-semibold mb-2">Payment Summary</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-300 font-medium">Total</span>
          <span className="text-blue-600 font-bold text-lg">AED 106</span>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
