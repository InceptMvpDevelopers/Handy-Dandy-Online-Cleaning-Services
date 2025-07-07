"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './react-calendar-custom.css';
import BookingDetailsCard from '@/components/apply-form-all/Right-side';
import Footer from '@/components/enduser/Footer';
import Navbar
 from '@/components/enduser/Navbar';
import { useRouter } from "next/navigation";
import { resetApplyForm } from "@/store/applyFormSlice";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setSelectedDate, setSelectedTime } from '@/store/applyFormSlice';
import { Toaster, toast } from "sonner";
import { addOrderApplyForm } from "@/app/supabase-apis/api";
import { useAuth } from "@/context/Authcontext";
import LoginModal from "@/components/signup/loginmodal";
import SignupModal from "@/components/signup/signupmodal";

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


const router = useRouter();

const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const {user} = useAuth();
  const dispatch = useDispatch();
  const {applyForm} = useSelector((state: RootState) =>state);
  const { selectedDate, selectedService, selectedTime } = useSelector((state: RootState) => state.applyForm);
  const selectedDateObj = selectedDate ? new Date(selectedDate) : new Date();
  
  // If no date is set, initialize to today
  React.useEffect(() => {


if (!selectedService){
  router.push('/home');
}


    if (!selectedDate) {
      dispatch(setSelectedDate(new Date().toISOString()));
    }
  }, [selectedDate, dispatch]);

  // Format selected date for the right panel
  const formatDate = (date: string | null | undefined) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  const handleProceed = async () => {


if(!selectedDate){
  toast.error('Please select date')
  return
}
if (!selectedTime){
  toast.error('Please select time')
  return
}
if (!user?.id) {
  setLoginModal(true);
  toast.error("You must be logged in to place an order.");
  return;
}
// router.push('/apply-form-4')
console.log("started");

await addOrderApplyForm(applyForm, user?.id)
}

  return (
     <div className='flex flex-col'>
      {/* Other COmponents */}
              <Toaster position="top-right" richColors />
      
            <SignupModal 
            open={signupModal}
            onClose={()=>{setSignupModal(false)}}
            showLogin={()=> {setSignupModal(false)
              setLoginModal(true)
            }}
            />
      
            <LoginModal 
            open={loginModal}
            onClose={()=> {setLoginModal(false)}}
              showSignup={()=>{
        setLoginModal(false)
      setSignupModal(true)}}
            />


      <Navbar />
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
            <div className="bg-[#fafbfc] rounded-2xl p-8 flex-1 shadow border border-gray-100 flex flex-col items-center min-w-[370px] max-w-[420px] mx-auto">
              <Calendar
                // onChange={(date) => dispatch(setSelectedDate((date as Date).toISOString()))}
             onChange={(date) => {
  const localDate = (date as Date).toLocaleDateString("en-CA"); // 'YYYY-MM-DD'
  dispatch(setSelectedDate(localDate));
}}
   
                value={selectedDateObj}
                calendarType="iso8601" // week starts on Monday
                prevLabel={<span className="text-2xl">&#60;</span>}
                nextLabel={<span className="text-2xl">&#62;</span>}
                tileClassName={({ date, view }) =>
                  view === 'month' && selectedDate && date.toDateString() === selectedDateObj.toDateString()
                    ? 'bg-blue-600 text-white rounded-full' : 'hover:bg-blue-50 rounded-full'
                }
                className="w-full react-calendar-custom [&_.react-calendar__navigation]:justify-between [&_.react-calendar__navigation]:mb-4 [&_.react-calendar__navigation__label]:text-lg [&_.react-calendar__navigation__label]:font-semibold [&_.react-calendar__month-view__weekdays]:text-base [&_.react-calendar__month-view__weekdays]:text-gray-400 [&_.react-calendar__tile]:h-12 [&_.react-calendar__tile]:w-12 [&_.react-calendar__tile]:text-base [&_.react-calendar__tile]:font-medium"
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
                    onClick={() => dispatch(setSelectedTime(slot))}
                    className={`rounded-xl border w-full py-4 text-center text-base font-medium transition-all duration-150 ${selectedTime === slot ? "border-blue-500 bg-blue-50 text-blue-600 shadow" : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Help Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-8 text-sm text-blue-900">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M12 8v4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#2563eb"/></svg>
            <p>Need Help? Contact us at</p> <p className="font-semibold ml-1">+971 50 163 1641</p> or email <p className="font-semibold ml-1">hello@handydandy.ae</p>.
          </div>
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <button onClick={()=> {dispatch(resetApplyForm()) 
              router.push('/home')}} className="bg-gray-200 text-gray-500 font-medium rounded-full px-8 py-3 w-32">Cancel</button>
            <button onClick={()=>router.back()} className="text-blue-700 underline font-medium px-4 py-2">Back</button>
            <button onClick={handleProceed} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 w-full sm:w-[250px] transition-colors">Proceed to checkout</button>
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
