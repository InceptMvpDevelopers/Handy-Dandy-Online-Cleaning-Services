"use client";
import React, { useState } from "react";
import Sidebar, { SidebarHamburgerButton } from '../../../components/account/Sidebar';
import { MdOutlineEdit } from "react-icons/md";
import NameModal from "@/components/account/NameModal";
import PhoneModal from '../../../components/account/PhoneModal';
import EmailModal from '../../../components/account/EmailModal';
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PersonalInformation() {
    const [profile, setProfile] = useState({
        name: "Password",
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
            <div className="w-full flex-1  flex flex-col lg:flex-row gap-8">
                {/* Sidebar: visible on large screens only */}
                <div className=" hidden lg:block">
                    <Sidebar active="security" />
                </div>
                {/* Sidebar Drawer: only for mobile */}
                <div className="block lg:hidden">
                    <Sidebar active="security" open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                </div>
                {/* Main Content */}
                <div className="flex-1 bg-white rounded-2xl border shadow-xl p-8 flex flex-col">
                    <h2 className="text-2xl  mb-8">Security</h2>

                    <div className="flex flex-col gap-6 w-full ">


                        <div className="flex items-center border border-gray-500 rounded-full px-4 w-full focus-within:ring-2 focus-within:ring-blue-200">
                            <input
                                type="text"
                                value={profile.name}
                                onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                                className="flex-1 bg-transparent py-3 text-lg focus:outline-none"
                                placeholder="Password"
                                readOnly
                            />
                            <MdOutlineEdit className="text-gray-500 text-xl cursor-pointer" onClick={() => setModals(m => ({ ...m, name: true }))} />
                        </div>
<div className="w-full h-[1px] bg-gray-200 my-6" />
<div className="flex">
    
    <div className="flex flex-col flex-1 gap-2">
    
        <p className="text-[16px] font-normal">2-step verification</p>
        <p className="text-[14px] font-light">Add additional security to your account with 2-step verification.</p>
    </div>
    <MdKeyboardArrowRight className="text-gray-400 w-10 h-10"/>

</div>
                    </div>
                  <div className="w-full h-[1px] bg-gray-200 my-6" />
                </div>
            </div>
            <NameModal
                open={modals.name}
                onClose={() => setModals(m => ({ ...m, name: false }))}
                firstName={nameFields.firstName}
                lastName={nameFields.lastName}
                onChange={(field, value) => setNameFields(f => ({ ...f, [field]: value }))}
                onUpdate={() => {
                    setProfile(p => ({ ...p, name: nameFields.firstName + ' ' + nameFields.lastName }));
                    setModals(m => ({ ...m, name: false }));
                }}
            />
            <EmailModal
                open={modals.email}
                onClose={() => setModals(m => ({ ...m, email: false }))}
                email={emailField}
                onChange={setEmailField}
                onUpdate={() => {
                    setProfile(p => ({ ...p, email: emailField }));
                    setModals(m => ({ ...m, email: false }));
                }}
            />
            <PhoneModal
                open={modals.phone}
                onClose={() => setModals(m => ({ ...m, phone: false }))}
                phone={phoneField}
                onChange={setPhoneField}
                onUpdate={() => {
                    setProfile(p => ({ ...p, phone: phoneField }));
                    setModals(m => ({ ...m, phone: false }));
                }}
            />
        </div>
    );
}
