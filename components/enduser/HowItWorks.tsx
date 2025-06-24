import React from "react";
import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorksSection() {
  return (
    <div className="px-4 py-8 flex flex-col items-center gap-8  ">
      {/* Heading */}
      <div className="flex text-[36px] sm:text-[52px] gap-x-2">
        <span className="font-[600]">How It</span>
        <span className="font-[400] italic">WORKS</span>
      </div>

      {/* Card Grid */}
<div className="flex flex-wrap gap-6 w-full  justify-center lg:justify-around mx-auto">

        <HowItWorksCard
          main_image="/end-user/1sthowitworks.png"
          title="Create Your Account in Seconds"
          description="Sign up or log in to HandyDandy to get started. It’s quick, easy, and secure!"
        />

        <HowItWorksCard
          main_image="/end-user/2ndhowitworks.svg"
          title="Pick the Perfect Plan"
          description="Select from our range of services – general, deep, office, or more. Customize to fit your needs!"
        />

        <HowItWorksCard
          main_image="/end-user/3rdhowitworks.svg"
          title="Schedule & Let Us Handle the Rest"
          description="Pick a date and time, confirm your booking, and our pros will take care of the cleaning!"
        />
      </div>
    </div>
  );
}
