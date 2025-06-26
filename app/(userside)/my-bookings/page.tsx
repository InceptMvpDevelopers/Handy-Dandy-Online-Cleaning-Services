"use client";
import React, { useState } from "react";
import Sidebar, { SidebarHamburgerButton } from '../../../components/account/Sidebar';
import { MdOutlineEdit } from "react-icons/md";
import NameModal from "@/components/account/NameModal";
import PhoneModal from '../../../components/account/PhoneModal';
import EmailModal from '../../../components/account/EmailModal';
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";

type Booking = {
  service: string;
  date: string;
  time: string;
  type: string;
  ref: string;
  detailsTitle: string;
  details: string;
  status: string;
  rating?: number;
  review?: string;
};

const bookingsData: { [key: string]: Booking[] } = {
  upcoming: [
    {
      service: "Deep cleaning",
      date: "September 24, 2017",
      time: "11:49 pm",
      type: "General Cleaning",
      ref: "#0948",
      detailsTitle: "Appartment",
      details: "1 Bedroom Apartment",
      status: "Confirmed",
    },
    {
      service: "Deep cleaning",
      date: "September 24, 2017",
      time: "11:49 pm",
      type: "General Cleaning",
      ref: "#0948",
      detailsTitle: "Appartment",
      details: "4 Bedroom Villa",
      status: "Confirmed",
    },
    {
      service: "Furniture cleaning",
      date: "September 24, 2017",
      time: "11:49 pm",
      type: "General Cleaning",
      ref: "#0948",
      detailsTitle: "Curtains",
      details: "X- Large (1000 x 300 cm)",
      status: "Confirmed",
    },
  ],
  past: [
    {
      service: "AC Duct Cleaning",
      date: "5 Oct 2023, 2:00 PM – 4:00 PM",
      time: "",
      type: "General Cleaning",
      ref: "#1234",
      detailsTitle: "",
      details: "",
      status: "",
      rating: 5,
      review: "Exceptional service! The ducts look brand new.",
    },
    {
      service: "AC Duct Cleaning",
      date: "5 Oct 2023, 2:00 PM – 4:00 PM",
      time: "",
      type: "General Cleaning",
      ref: "#1234",
      detailsTitle: "",
      details: "",
      status: "",
      rating: 5,
      review: "Exceptional service! The ducts look brand new.",
    },
    {
      service: "AC Duct Cleaning",
      date: "5 Oct 2023, 2:00 PM – 4:00 PM",
      time: "",
      type: "General Cleaning",
      ref: "#1234",
      detailsTitle: "",
      details: "",
      status: "",
      rating: 3,
      review: "Exceptional service! The ducts look brand new.",
    },
  ],
  cancelled: [{
      service: "Deep cleaning",
      date: "September 24, 2017",
      time: "11:49 pm",
      type: "General Cleaning",
      ref: "#0948",
      detailsTitle: "Appartment",
      details: "1 Bedroom Apartment",
      status: "Confirmed",
    },
    {
      service: "Deep cleaning",
      date: "September 24, 2017",
      time: "11:49 pm",
      type: "General Cleaning",
      ref: "#0948",
      detailsTitle: "Appartment",
      details: "4 Bedroom Villa",
      status: "Confirmed",
    },],
};

const tabList = [
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
  { key: "cancelled", label: "Cancelled" },
];

export default function MyBookings() {
  const [tab, setTab] = useState<keyof typeof bookingsData>("upcoming");
  let bookings = bookingsData[tab];

  // For cancelled, reuse upcoming but set status to Cancelled
  const cancelledBookings = bookingsData.upcoming.map(b => ({ ...b, status: 'Cancelled' }));

  return (
    <div className="min-h-screen p-6 bg-[#fcfcfc] flex flex-col">
      <div className="ml-20 relative w-[151px] h-[83px] mb-6 flex items-center">
        <Image
          src="/Main Logo (2).svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex text-[#282828] text-[52px] gap-x-2 flex-wrap">
        <span className="font-[600]">MY</span>
        <span className="font-[400] italic">BOOKINGS</span>
      </div>

      <div className="flex-1 bg-white rounded-2xl border shadow-xl p-8 flex flex-col">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {tabList.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as keyof typeof bookingsData)}
              className={`px-6 py-2 rounded-lg border transition-all font-medium text-base ${tab === t.key ? "bg-[#F2F4FA] border-[#F2F4FA] text-[#6B6B6B]" : "bg-[#F8F8F8] border-[#E5E7EB] text-[#6B6B6B]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {tab === 'past' ? (
            <table className="min-w-full">
              <thead>
                <tr className="text-gray-400 text-sm font-semibold">
                  <th className="text-left px-4 py-2">Booking name</th>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Service Type</th>
                  <th className="text-left px-4 py-2">Your Rating</th>
                  <th className="text-left px-4 py-2">Reviews</th>
                  <th className="text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center text-gray-400 py-8">No bookings found.</td>
                  </tr>
                ) : (
                  bookings.map((b: any, i: number) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="px-4 py-4 text-[#282828] font-medium">{b.service}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.date}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.type}</td>
                      <td className="px-4 py-4">
                        <div className="flex gap-1">
                          {[...Array(b.rating)].map((_, idx) => (
                            <FaStar key={idx} className="text-yellow-400 text-xl" />
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.review}</td>
                      <td className="px-4 py-4 text-right">
                        <span className="inline-block cursor-pointer text-blue-500 text-2xl">&#8942;</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          ) : (
            <table className="min-w-full">
              <thead>
                <tr className="text-gray-400 text-sm font-semibold">
                  <th className="text-left px-4 py-2">Next booking</th>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Time</th>
                  <th className="text-left px-4 py-2">Service Type</th>
                  <th className="text-left px-4 py-2">Booking Ref</th>
                  <th className="text-left px-4 py-2">Details</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center text-gray-400 py-8">No bookings found.</td>
                  </tr>
                ) : (
                  bookings.map((b: Booking, i: number) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="px-4 py-4 text-[#282828] font-medium">{b.service}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.date}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.time}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.type}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{b.ref}</td>
                      <td className="px-4 py-4">
                        <div className="font-bold text-[#282828]">{b.detailsTitle}</div>
                        <div className="text-[#6B6B6B] text-sm">{b.details}</div>
                      </td>
                      <td className={`px-4 py-4 font-semibold ${tab === 'cancelled' ? 'text-red-500' : 'text-green-500'}`}>{tab === 'cancelled' ? 'Cancelled' : b.status}</td>
                      <td className="px-4 py-4 text-right">
                        <span className="inline-block cursor-pointer text-blue-500 text-2xl">&#8942;</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
