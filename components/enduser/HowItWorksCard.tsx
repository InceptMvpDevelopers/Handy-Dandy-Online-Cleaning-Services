// components/HowItWorksCard.tsx
import Image from "next/image";

type Parameters = {
  title: string;
  main_image: string;
  description: string;
};

export default function HowItWorksCard({
  title,
  main_image,
  description,
}: Parameters) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] p-4 w-full flex-1 max-w-[500px]  min-w-[280px] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[206px] rounded-xl overflow-hidden mb-4">
          <Image
            src={main_image}
            alt={title}
            fill
            className="contain"
          />
        </div>

        <div className="flex flex-col text-[20px] leading-tight mb-2">
          <p className="font-[600] text-[24px]">{title}</p>
        </div>

        <p className="text-gray-800 font-[300] text-center text-[18px] mb-3">{description}</p>
      </div>
    </div>
  );
}
