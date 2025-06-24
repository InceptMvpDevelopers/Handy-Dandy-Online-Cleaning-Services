import React from 'react'

export default function BookOurService() {
  return (
<div className="flex flex-col sm:flex-row sm:justify-around items-center p-6 min-h-[130px] w-full shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] gap-6 sm:gap-4">
  <p className="font-semibold text-[20px] sm:text-[24px] text-center sm:text-left">
    Book our service
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <select
      className="w-full sm:w-[186px] h-[50px] sm:h-[63px] rounded-full border border-gray-300 px-4 text-gray-700 focus:outline-none"
    >
      <option value="">Service Type</option>
      <option value="cleaning">Cleaning</option>
      <option value="repair">Repair</option>
      <option value="installation">Installation</option>
    </select>

    <select
      className="w-full sm:w-[186px] h-[50px] sm:h-[63px] rounded-full border border-gray-300 px-4 text-gray-700 focus:outline-none"
    >
      <option value="">Service Date</option>
      <option value="today">Today</option>
      <option value="tomorrow">Tomorrow</option>
      <option value="nextweek">Next Week</option>
    </select>
  </div>

  <button className="h-[50px] sm:h-[63px] w-full sm:w-[135px] rounded-full bg-blue-600 text-white">
    Search
  </button>
</div>

  )
}
