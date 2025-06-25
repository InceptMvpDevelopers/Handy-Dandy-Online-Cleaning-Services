"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import BookingDetailsCard from '@/components/apply-form-all/Right-side';

const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "01:00 AM",
  "02:00 PM",
  "02:00 AM",
  "03:00 PM",
  "04:00 AM",
  "05:00 PM",
];

export default function ApplyForm3() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Format selected date for the right panel
  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-8">
      <div className="bg-white flex flex-col flex-[2] rounded-2xl shadow-xl p-6 sm:p-10">
        {/* Header and Date */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="block text-2xl font-bold tracking-wide">DATE &</span>
            <span className="block text-xl italic text-gray-400 font-light -mt-2">TIME</span>
          </div>
          <div className="text-xs text-gray-400 font-medium flex items-center gap-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" fill="none"/><path d="M7 2v2M17 2v2M3 7h18M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" stroke="#BDBDBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="11" width="2" height="2" rx="1" fill="#BDBDBD"/><rect x="11" y="11" width="2" height="2" rx="1" fill="#BDBDBD"/><rect x="15" y="11" width="2" height="2" rx="1" fill="#BDBDBD"/></svg>
            Thursday <span className="font-bold ml-1">31/05/23</span>
          </div>
        </div>
        {/* Stepper */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-300 rounded-full" />
          <div className="flex-1 h-1 bg-blue-100 rounded-full" />
        </div>
        {/* Calendar and Time Slots */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
          {/* Calendar */}
          <div className="bg-[#fafbfc] rounded-2xl p-4 flex-1 shadow border border-gray-100 flex flex-col items-center">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              showOutsideDays
              fromYear={2022}
              toYear={2025}
              className=" flex-1"
              classNames={{
                months: "flex flex-col sm:flex-row gap-4",
                month: "space-y-4",
                caption: "flex justify-between items-center mb-2 px-2",
                caption_label: "text-base font-medium",
                nav: "flex items-center gap-1",
                nav_button: "rounded-full p-1 hover:bg-blue-50 transition",
                table: "w-full border-collapse",
                head_row: "flex",
                head_cell: "w-8 h-8 text-center text-xs text-gray-400 font-medium",
                row: "flex w-full",
                cell: "w-8 h-8 text-center text-sm rounded-full cursor-pointer select-none flex items-center justify-center",
                day_selected: "bg-blue-600 text-white",
                day_today: "border border-blue-400",
                day_outside: "text-gray-300",
                day: "hover:bg-blue-50",
              }}
            />
          </div>
          {/* Time Slots */}
          <div className="bg-[#fafbfc] rounded-2xl p-4 flex-1 shadow border border-gray-100 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <button className="rounded-full p-1 hover:bg-blue-50 transition text-gray-400" disabled>{"<"}</button>
              <span className="text-base font-medium">{formatDate(selectedDate)}</span>
              <button className="rounded-full p-1 hover:bg-blue-50 transition text-gray-400" disabled>{">"}</button>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`rounded-xl border w-full py-4 text-center text-base font-medium transition-all duration-150 ${selectedTime === slot ? "border-blue-500 bg-blue-50 text-blue-600 shadow" : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"}`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Help Bar */}
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-8 text-sm text-blue-900">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M12 8v4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#2563eb"/></svg>
          Need Help? Contact us at <span className="font-semibold ml-1">+971 50 163 1641</span> or email <span className="font-semibold ml-1">hello@handydandy.ae</span>.
        </div>
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <button className="bg-gray-200 text-gray-500 font-medium rounded-full px-8 py-3 w-32">Cancel</button>
          <button className="text-blue-700 underline font-medium px-4 py-2">Back</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 w-full sm:w-56 transition-colors">Proceed to checkout</button>
        </div>
      </div>

              <div className='flex flex-col  flex-1'>
            
                <BookingDetailsCard />
            
        </div>
    </div>
  );
}
