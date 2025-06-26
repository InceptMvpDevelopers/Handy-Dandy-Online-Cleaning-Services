import React from "react";
import { FaUser, FaLock, FaShieldAlt, FaBars } from "react-icons/fa";

export function SidebarHamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="lg:hidden p-2 text-2xl text-gray-700" onClick={onClick}>
      <FaBars />
    </button>
  );
}

export default function Sidebar({ active, open, onClose }: {
  active: 'personal' | 'security' | 'privacy',
  open?: boolean,
  onClose?: () => void
}) {
  // Sidebar content
  const content = (
    <nav className="flex flex-col gap-4">
      <a href="/personal-information" className={`flex items-center gap-3 font-semibold text-base py-2 px-4 rounded-lg ${active === 'personal' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}> <FaUser className={active === 'personal' ? 'text-blue-600' : 'text-gray-400'} /> Personal Information </a>
      <a href="/security" className={`flex items-center gap-3 font-semibold text-base py-2 px-4 rounded-lg ${active === 'security' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}> <FaLock className={active === 'security' ? 'text-blue-600' : 'text-gray-400'} /> Security </a>
      <a href="/privacy-policy" className={`flex items-center gap-3 font-semibold text-base py-2 px-4 rounded-lg ${active === 'privacy' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}> <FaShieldAlt className={active === 'privacy' ? 'text-blue-600' : 'text-gray-400'} /> Privacy Policy </a>
    </nav>
  );

  // Desktop sidebar
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block bg-white rounded-2xl h-full shadow-xl p-8 w-full max-w-xs flex flex-col gap-6">
        {content}
      </div>
      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0  bg-black bg-opacity-30" onClick={onClose}></div>
          <div className="relative bg-white rounded-r-2xl shadow-xl p-8  h-full flex flex-col gap-6 z-10 animate-slideInLeft">
            <button className="absolute top-4 right-4 text-2xl  text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
            <p></p>
            {content}
          </div>
        </div>
      )}
    </>
  );
}

// Add slideInLeft animation
// In your global CSS (e.g. styles/globals.css), add:
// @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
// .animate-slideInLeft { animation: slideInLeft 0.3s ease; } 