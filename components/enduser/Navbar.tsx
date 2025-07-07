"use client"
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { MdMyLocation } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GoChecklist } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { useAuth } from '@/context/Authcontext'
import { useState } from 'react'
import SignupModal from '../signup/signupmodal'
import Link from 'next/link'
import LoginModal from '../signup/loginmodal'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
// import { User, LogOut,  } from "lucide-react";
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HelpCircle, LogOut, User } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
  const {user, logout} = useAuth();
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-4 md:p-8">
      {/* Logo */}
      <img
        src="/handydandy-logo.svg"
        alt="HandyDandy Logo"
        className="h-12 md:h-20 w-auto"
      />

      {/* "Our services" dropdown — hide on small screens */}
      <div className="hidden md:flex gap-2 items-center">
        <p>Our services</p>
        <IoIosArrowDown />
      </div>

      {/* Location input — hide on small screens */}
      <div className="hidden lg:flex flex-1 gap-2 items-center max-w-[328px] bg-[#cfd4e3] h-[50px] p-4 px-5 rounded-full shadow-[0_4px_10px_0_rgba(0,0,0,0.05)]">
        <ImLocation className="text-blue-500" />
        <input
          type="text"
          placeholder="Location"
          className="w-full focus:outline-none bg-transparent text-black/80"
        />
        <MdMyLocation className="text-blue-500" />
      </div>

      {/* Search bar — hide on small screens */}
      <div className="hidden md:flex flex-1 gap-2 items-center max-w-[328px] bg-white h-[50px] p-4 px-5 rounded-full shadow-[0_4px_10px_0_rgba(0,0,0,0.05)]">
        <GoSearch />
        <input
          type="text"
          placeholder="Search for services"
          className="w-full focus:outline-none bg-transparent text-black/80"
        />
      </div>

      {/* Profile + Menu */}
      <div className="flex items-center gap-4">
        {user? (
        <Link href="/personal-information">
          <img
            src="/end-user/profile.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-full object-cover hidden md:block"
          />
        </Link>): (<div className='flex items-center gap-4'>
          <button onClick={()=> {setLoginModal(true)}}>
            Login
          </button>
            <button onClick={()=>{setSignupModal(true)}} className='bg-blue-600 rounded-full text-white h-[50px] w-[116px]'>Join Now</button>
        </div>
        )
        }
       
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <RxHamburgerMenu className="text-2xl hover:cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 mr-6">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Always show Help */}
        <DropdownMenuItem onClick={() => router.push("/help")}>
          <HelpCircle className="w-4 h-4 mr-2" />
          Help
        </DropdownMenuItem>

        {/* Only show when user is logged in */}
        {user?.id && (
          <>
            <DropdownMenuItem
              onClick={() => router.push("/personal-information")}
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
              <DropdownMenuItem
              onClick={() => router.push("/my-bookings")}
            >
              <GoChecklist className="w-4 h-4 mr-2" />
              Bookings
            </DropdownMenuItem>

            <DropdownMenuItem onClick={()=> {logout()}} className="text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
      </div>

      <SignupModal 
      open={signupModal}
      onClose={()=>{setSignupModal(false)
      }}
      showLogin={()=> {
        setSignupModal(false)
        setLoginModal(true)
      }}
      />

      <LoginModal 
      open={loginModal}
      onClose={()=> {setLoginModal(false)}}
      showSignup={()=>{
        setLoginModal(false)
      setSignupModal(true)}}/>
    </div>
  )
}
