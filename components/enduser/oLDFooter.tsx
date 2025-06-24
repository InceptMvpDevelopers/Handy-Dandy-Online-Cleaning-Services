import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0057d8] text-white pt-10 pb-4 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Subscribe To Our Newsletter</h2>
          <p className="text-xs sm:text-sm text-[#b3c6f7] mb-4 sm:mb-6">Get The Latest Updates, Discounts, And Cleaning Tips Straight To Your Inbox!</p>
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center border-b border-[#b3c6f7] pb-2 mb-6 sm:mb-8 gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none flex-1 text-base sm:text-lg placeholder:text-[#e0e7ff] text-white py-2"
            />
            <button className="text-2xl sm:text-3xl text-white xs:ml-2"><FiArrowUpRight /></button>
          </div>
          <button className="flex items-center gap-2 bg-white text-[#0057d8] font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md mb-6 sm:mb-8 w-full xs:w-auto justify-center">
            <FaPhoneAlt /> Get in Touch
          </button>
          <div className="flex items-start gap-2 text-sm sm:text-base mb-4 sm:mb-6">
            <FaMapMarkerAlt className="text-lg sm:text-xl mt-1" />
            <span>The Binary by Omniyat, Marasi Drive, Business Bay, 19th Floor, Office 1914, P.O. Box 83625, Dubai, UAE</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base mb-6 sm:mb-8">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
        {/* Navigation & Services */}
        <div className="flex flex-col sm:flex-row flex-1 gap-8 sm:gap-12 lg:gap-24 justify-center mt-6 lg:mt-0">
          <div>
            <h3 className="text-[#b3c6f7] font-medium mb-2 text-sm sm:text-base">Quick Navigation</h3>
            <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Pricing Plans</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#b3c6f7] font-medium mb-2 text-sm sm:text-base">Our Services</h3>
            <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li><a href="#" className="hover:underline">General Cleaning</a></li>
              <li><a href="#" className="hover:underline">Technical Services</a></li>
              <li><a href="#" className="hover:underline">Interior design</a></li>
            </ul>
          </div>
        </div>
        {/* Working Hours */}
        <div className="flex flex-col items-center lg:items-end min-w-[180px] sm:min-w-[220px] mt-6 lg:mt-0">
          <div className="flex items-center gap-2 sm:gap-3 bg-[#2563eb] bg-opacity-30 rounded-full px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 w-full sm:w-auto justify-center">
            <BsClock className="text-xl sm:text-2xl" />
            <div>
              <div className="text-sm sm:text-base font-medium">Monday - Sunday |</div>
              <div className="text-xs sm:text-sm">8:00 AM - 10:00 PM</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-[#b3c6f7] mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-[#e0e7ff] text-xs sm:text-sm">
        <div className="flex-1 text-center md:text-left w-full">2023 © HandyDandy</div>
        <div className="flex-1 flex flex-wrap justify-center gap-4 sm:gap-8 w-full">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Refund & Cancellation Policy</a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end gap-4 sm:gap-6 text-xl sm:text-2xl w-full mt-2 md:mt-0">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="VK"><FaVk /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;