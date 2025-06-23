"use client"

// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { useState } from "react"
// import { Menu, X } from "lucide-react"

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between lg:px-14">
        <div className="flex items-center space-x-2">
          <img src="/handydandy-logo.svg" alt="HandyDandy Logo" className="h-14 md:h-20 w-auto" />
        </div>
      </div> 

     
    </header>
  )
}
