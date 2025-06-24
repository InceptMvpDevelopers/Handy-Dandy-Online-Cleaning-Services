import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { MdMyLocation } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navbar() {
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
        <ImLocation />
        <input
          type="text"
          placeholder="Location"
          className="w-full focus:outline-none bg-transparent text-black/80"
        />
        <MdMyLocation />
      </div>

      {/* Search bar — hide on small screens */}
      <div className="hidden md:flex flex-1 gap-2 items-center max-w-[328px] bg-white h-[50px] p-4 px-5 rounded-full shadow-[0_4px_10px_0_rgba(0,0,0,0.05)]">
        <ImLocation />
        <input
          type="text"
          placeholder="Search for services"
          className="w-full focus:outline-none bg-transparent text-black/80"
        />
      </div>

      {/* Profile + Menu */}
      <div className="flex items-center gap-4">
        <img
          src="/end-user/profile.jpg"
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover hidden md:block"
        />
        <RxHamburgerMenu className="text-2xl" />
      </div>
    </div>
  )
}
