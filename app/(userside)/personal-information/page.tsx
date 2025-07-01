"use client";
import React, { useState } from "react";
import Sidebar, { SidebarHamburgerButton } from '../../../components/account/Sidebar';
import { MdOutlineEdit } from "react-icons/md";
import NameModal from "@/components/account/NameModal";
import PhoneModal from '../../../components/account/PhoneModal';
import EmailModal from '../../../components/account/EmailModal';
import Image from "next/image";
import { User, LogOut } from "lucide-react";

export default function PersonalInformation() {
  const [profile, setProfile] = useState({
    name: "Aubrey Greg",
    email: "alma.lawson@example.com",
    phone: "(201) 555-0124",
    image: "/end-user/profile.jpg"
  });

  const [modals, setModals] = useState({ name: false, email: false, phone: false });
  const [nameFields, setNameFields] = useState({ firstName: "Aubrey", lastName: "Greg" });
  const [emailField, setEmailField] = useState(profile.email);
  const [phoneField, setPhoneField] = useState(profile.phone);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-[#fcfcfc] flex flex-col  ">
 
 {/* Navbar */}
 <div className="flex justify-between items-center">  
   <div className="ml-20 relative w-[151px] h-[83px] mb-6 flex items-center">
      <Image
        src="/Main Logo (2).svg"
        alt="Logo"
        fill
        className="object-contain"
      />
    </div>
    <div className="block lg:hidden">
      <SidebarHamburgerButton onClick={() => setSidebarOpen(true)} />
    </div>
 </div>

        <div className="flex text-[#282828] text-[52px] gap-x-2 flex-wrap ">
                    <span className="font-[600]">HANDYDANDY</span>
                    <span className="font-[400] italic">ACCOUNT</span>
                </div>
      <div className="w-full  flex flex-col lg:flex-row gap-8">
        {/* Sidebar: visible on large screens only */}
        <div className=" hidden lg:block">
          <Sidebar active="personal" />
        </div>
        {/* Sidebar Drawer: only for mobile */}
        <div className="block lg:hidden">
          <Sidebar  active="personal" open={sidebarOpen} onClose={() => setSidebarOpen(false)}  />
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-white rounded-2xl border shadow-xl p-8 flex flex-col">
          <h2 className="text-2xl  mb-8">My Profile</h2>
          <div className="flex flex items-center mb-8">
            <img src={profile.image} alt="Profile" className="w-[130px] md:w-[206px]   h-auto rounded-full object-cover mb-4 border-4 border-white shadow" />
            <div className="flex flex-col gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2">Change picture</button>
              <button className="border border-blue-600 text-blue-600 font-medium rounded-full px-6 py-2 bg-white hover:bg-blue-50">Delete picture</button>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full ">
          

            <div className="flex items-center border border-gray-500 rounded-full px-4 w-full focus-within:ring-2 focus-within:ring-blue-200">
              <input
                type="text"
                value={profile.name}
                onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                className="flex-1 bg-transparent py-3 text-lg focus:outline-none"
                placeholder="Enter name"
                readOnly
              />
              <MdOutlineEdit className="text-gray-500 text-xl cursor-pointer" onClick={() => setModals(m => ({...m, name: true}))} />
            </div>

            <div className="flex items-center border border-gray-500 rounded-full px-4 w-full focus-within:ring-2 focus-within:ring-blue-200">
              <input
                type="email"
                value={profile.email}
                onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
                className="flex-1 bg-transparent py-3 text-lg focus:outline-none"
                placeholder="Email"
                readOnly
              />
              <MdOutlineEdit className="text-gray-500 text-xl cursor-pointer" onClick={() => setModals(m => ({...m, email: true}))} />
            </div>

            {/* Phone Input with Icon */}
            <div className="flex items-center border border-gray-500 rounded-full px-4 w-full focus-within:ring-2 focus-within:ring-blue-200">
              <input
                type="text"
                value={profile.phone}
                onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                className="flex-1 bg-transparent py-3 text-lg focus:outline-none"
                placeholder="Phone"
                readOnly
              />
              <MdOutlineEdit className="text-gray-500 text-xl cursor-pointer" onClick={() => setModals(m => ({...m, phone: true}))} />
            </div>          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-10 py-3 text-lg">Save</button>
          </div>
        </div>
      </div>
      <NameModal
        open={modals.name}
        onClose={() => setModals(m => ({...m, name: false}))}
        firstName={nameFields.firstName}
        lastName={nameFields.lastName}
        onChange={(field, value) => setNameFields(f => ({...f, [field]: value}))}
        onUpdate={() => {
          setProfile(p => ({...p, name: nameFields.firstName + ' ' + nameFields.lastName}));
          setModals(m => ({...m, name: false}));
        }}
      />
      <EmailModal
        open={modals.email}
        onClose={() => setModals(m => ({...m, email: false}))}
        email={emailField}
        onChange={setEmailField}
        onUpdate={() => {
          setProfile(p => ({...p, email: emailField}));
          setModals(m => ({...m, email: false}));
        }}
      />
      <PhoneModal
        open={modals.phone}
        onClose={() => setModals(m => ({...m, phone: false}))}
        phone={phoneField}
        onChange={setPhoneField}
        onUpdate={() => {
          setProfile(p => ({...p, phone: phoneField}));
          setModals(m => ({...m, phone: false}));
        }}
      />
    </div>
  );
}
