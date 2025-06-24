import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import WhyChooseUs2ndCard from "./WhyChooseUs2ndCard";

export default function WhyChooseUs() {
  return (
    <div className="px-4 py-8 flex flex-col items-center w-full">
      {/* Heading */}
  <div className="flex flex-wrap gap-10  w-full">
  {/* Left Section */}
  <div className="flex flex-col flex-[3]  min-w-[300px]">
    <div className="flex text-[#282828] text-[36px] sm:text-[52px] gap-x-2 text-center flex-wrap justify-center">
      <span className="font-[600]">WHY CHOOSE</span>
      <span className="font-[400] italic">US?</span>
    </div>
    <span className="font-[600] text-[#282828] text-[28px] sm:text-[36px] mt-2 text-center">
      BECAUSE YOUR TIME IS PRECIOUS
    </span>
  </div>

  {/* Right Section */}
  <div className="flex flex-col flex-[2] min-w-[300px]">
    <p className="text-[18px] font-[300] text-[#7E8487]">
      Life is busy, and between work, family, and everything else, who has time
      to manage home services? That’s where HandyDandy.ae comes in. Whether you're
      a working professional, a busy parent, or someone who values a well-maintained
      home, we make it effortless. Our expert team delivers reliable, high-quality
      services so you can focus on what truly matters.
    </p>
  </div>
</div>





      {/* Row container */}
      <div className="flex flex-col xl:flex-row flex-wrap justify-center w-full mt-10 gap-6">
        {/* Column of cards */}
        <div className="flex flex-col gap-6 min-w-[280px]  px-4 flex-[3]">
          <WhyChooseUsCard
            main_image="/end-user/deceased.png"
            title="A Healthier Home with Eco-Friendly Solutions"
            description="A well-maintained home isn’t just about appearances—it’s about your health and well-being. That’s why we use eco-friendly, non-toxic solutions that protect your loved ones while delivering effective results. Whether it's your home, office, or workspace, we ensure it's fresh, hygienic, and safe for everyone."
            description2={[
              "Safe for Kids & Pets – No harmful chemicals, just a naturally fresh home.",
              "Breathe Better – Removes dust, allergens, and bacteria for improved air quality.",
              "Advanced Technology – Industry-leading tools and techniques for long-lasting results.",
              "Tailored Service Packages – Choose from general cleaning, deep cleaning, AC duct cleaning, maintenance, and more.",
            ]}
          />

          <WhyChooseUsCard
            main_image="/end-user/credit_card_heart.png"
            title="Best Value, Best Execution, Best Team – Home Services Made Easy!"
            description="We know you’re busy, and you need a service provider that works around your schedule. Whether it's a one-time fix or a regular maintenance plan, we make it easy, affordable, and stress-free."
            description2={[
              "Best Price – Affordable plans that fit every budget.",
              "Best Execution – Our team is fast, reliable, and gets the job done right every time. 👨‍👩‍",
              "Best Team – Skilled, friendly, and background-checked professionals you can trust.",
              "Always Here for You – 24/7 support, flexible bookings, and dedicated customer service.",
            ]}
          />
        </div>


{/* 2nd div */}
             <div className="flex flex-col gap-6 min-w-[280px]  px-4 flex-[2]">
          <WhyChooseUs2ndCard
            main_image="/end-user/deceased.png"
          
           description2={[
  "Services You Can Trust – Vetted, trained, and experienced professionals who respect your space.",
  "Fits Your Schedule – Flexible bookings, same-day availability, and recurring service plans.",
  "No Hidden Costs – Transparent pricing with affordable packages to suit your needs.",
  "Guaranteed Satisfaction – We don’t just provide services—we create homes you love to live in.",
]}

          />

          
        </div>
      
      </div>
    </div>
  );
}
