import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export default function DownloadsSection() {
  return (
    <div className="flex  items-center gap-4 p-16 bg-[#175cff]">
      
      {/* App Store Button */}
      <button className="flex items-center gap-3 px-5 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#175cff] transition">
        <FaApple size={24} />
        <div className="text-left">
          <p className="text-xs">Download from</p>
          <p className="text-sm font-semibold">App Store</p>
        </div>
      </button>

      {/* Google Play Button */}
      <button className="flex items-center gap-3 px-5 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#175cff] transition">
        <FaGooglePlay size={24} />
        <div className="text-left">
          <p className="text-xs">Download from</p>
          <p className="text-sm font-semibold">Google Play</p>
        </div>
      </button>

    </div>
  )
}
