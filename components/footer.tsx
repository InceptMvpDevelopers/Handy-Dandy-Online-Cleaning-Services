import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Phone, ArrowUpRight } from "lucide-react"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#BACBFD] mt-8 px-2 sm:px-4 md:px-10 pt-6 pb-2 lg:pt-4 lg:pb-8 relative overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24 w-full">
        {/* Logo/About/Contact */}
        <div className="flex-1 flex flex-col items-start justify-between min-w-[300px] max-w-xs lg:pl-6 mb-4 lg:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <img src="footer-logo.png" alt="HandyDandy Logo" className="w-20  sm:w-32  lg:w-34 " />
          </div>
         
          <a href="https://wa.me/97142292416" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1852F9] text-white px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm shadow hover:bg-blue-700 transition mb-4">
            <Phone className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:flex-row lg:gap-[81px] justify-between w-full">
          {/* Services */}
          <div className=" space-y-6 flex-1 min-w-[100px] mb-4 sm:mb-0">
            <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-800">Services</h4>
            <ul className="space-y-2 sm:space-y-6 text-gray-600 text-xs sm:text-sm ">
              <li>Space Cleaning</li>
              <li>Technical Services</li>
              <li>Interior Design</li>
              
            </ul>
          </div>
          
          
        </div>
      </div>
      {/* Decorative PNG Corners */}
      <img src="/Landing-page/decor-topright.png" alt="decorative corner" className="absolute top-0 left-0 w-36 sm:w-56 md:w-80 lg:w-[20rem] z-0 pointer-events-none select-none" style={{ objectFit: "contain" }} />
      <img src="/Landing-page/decor-bottomleft.png" alt="decorative corner" className="absolute bottom-0 right-0 w-28 sm:w-40 md:w-56 lg:w-[16rem] z-0 pointer-events-none select-none" style={{ objectFit: 'contain' }} />
      <div className="flex lg:justify-end sm:justify-center gap-4 mt-4 sm:mt-6">
        <a href="#" aria-label="Facebook" className="rounded-full bg-black p-1 hover:bg-gray-800 transition-colors">
          <FaFacebook className="w-4 h-4 text-white" />
        </a>
        <a href="#" aria-label="LinkedIn" className="rounded-full bg-black p-1 hover:bg-gray-800 transition-colors">
          <FaLinkedin className="w-4 h-4 text-white" />
        </a>
        <a href="#" aria-label="Instagram" className="rounded-full bg-black p-1 hover:bg-gray-800 transition-colors">
          <FaInstagram className="w-4 h-4 text-white" />
        </a>
      </div>
      {/* Divider */}
      <hr className="my-4 sm:my-6 border-gray-200" />
      {/* Bottom Row */}
      {/* <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pb-2 text-xs text-gray-500">
        <div>2025 © HandyDandy</div>
        <div className="flex gap-4 sm:gap-6">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms & Conditions</Link>
          <Link href="#" className="hover:underline">Refund & Cancellation Policy</Link>
        </div>
      </div> */}
    </footer>
  )
}
