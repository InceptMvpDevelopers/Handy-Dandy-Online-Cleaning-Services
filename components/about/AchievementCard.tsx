import React from "react";

type InfoCardProps = {
  title: string;
  description: string
};

const AchievementCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_4px_40px_0px_rgba(0,0,0,0.1)] border border-[#D1DCFE] p-6 w-full flex-1 min-h-[283px] min-w-[280px]">   
      <h3 className="text-[#282828] text-[32px] font-bold mb-2">{title}</h3>
      <p className="text-[#4A4A4A] text-[18px] font-light leading-relaxed">{description}</p>
    </div>
  );
};

export default AchievementCard;
