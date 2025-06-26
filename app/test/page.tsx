import React from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

export default function page() {
  return (
    <div className='bg-slate-300 flex flex-wrap flex-col gap-8justify-between h-[600px] '>
        
        <DropdownMenu >
  <DropdownMenuTrigger asChild>
    <button  className="flex justify-center gap-2 items-center bg-white w-full sm:w-[186px] h-[50px] sm:h-[63px] rounded-full border border-gray-300 px-4 text-gray-700 focus:outline-none">
      Open Menu
<IoIosArrowDown />
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent  sideOffset={-1} className="bg-white w-full sm:w-[186px] ">
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>



    </div>
  )
}
