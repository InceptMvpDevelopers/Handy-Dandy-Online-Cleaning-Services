import React from "react";

type InfoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const InfoCard = ({ title, description, imageSrc }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 w-full flex-1 min-w-[280px] md:min-w-[400px]">
      <div className="bg-blue-300 w-12 h-12 flex items-center justify-center rounded-full mb-4">
        <img src={imageSrc} alt={title} className="w-6 h-6" />
      </div>
      <h3 className="text-[#1A1A1A] text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#4A4A4A] text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
