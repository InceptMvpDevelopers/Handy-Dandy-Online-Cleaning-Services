"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, LogOut } from "lucide-react";
import { Toaster, toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function TestPage() {
  const router = useRouter();

  const handleClick = () => {
    toast.success("This is a test notification!");
  };

  const handleAddData = async () => {
    try {
      const { data } = await supabase
        .from("test")
        .insert([{ name: "okay nice" }])
        .select();
      console.log("data added: ", data);
    } catch (error) {
      console.log("got an error: ", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out!");
    router.push("/home");
  };

  return (
    <div className="flex gap-4 items-center p-4 bg-red-500">
      <Toaster position="top-right" richColors />

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Toast
      </button>

      <button
        onClick={handleAddData}
        className="border border-gray-700 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition"
      >
        Add Data
      </button>

      <button
        onClick={() => {
          router.push("/test");
        }}
        className="border border-gray-700 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition"
      >
        Go to Test
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition">
            <Image
              src="/end-user/profile.jpg"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => router.push("/personal-information")}
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleLogout} className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
