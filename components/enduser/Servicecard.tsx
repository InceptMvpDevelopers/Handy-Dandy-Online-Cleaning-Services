// components/ServiceCard.tsx
import Image from "next/image";

type Parameters = {
  title: string;
  title2: string;
  main_image: string;
  description: string;
  icon_image: string;
  isService?: boolean;
  isInterior?: boolean // ✅ fixed type here
};

export default function ServiceCard({
  title,
  title2,
  main_image,
  description,
  icon_image,
  isService = false,
  isInterior= false,
}: Parameters) {
  // ✅ determine colors based on `isService`
const bgColor = isInterior
  ? "bg-pink-500"
  : isService
    ? "bg-orange-500"
    : "bg-blue-600";

const textColor = isInterior
  ? "text-pink-700"
  : isService
    ? "text-orange-700"
    : "text-blue-700";

const borderColor = isInterior
  ? "border-pink-700"
  : isService
    ? "border-orange-700"
    : "border-blue-700";


  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_40px_0px_rgba(0,0,0,0.5)] p-4 w-full max-w-[300px] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[206px] rounded-xl overflow-hidden mb-4">
          <Image
            src={main_image}
            alt={`${title} ${title2}`}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center`}>
            <Image
              src={icon_image}
              alt="Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col text-[20px] leading-tight">
            <span className="font-[600]">{title}</span>
            <span className="font-[400] text-base">{title2}</span>
          </div>
        </div>
{ !isInterior &&
        <p className="text-gray-500 text-sm mb-3">{description}</p>
}      </div>

      <button className={`${textColor} ${borderColor} border w-full py-2 text-sm rounded-full`}>
        {isInterior? "Inspection" : "Book now"}
      </button>
    </div>
  );
}
