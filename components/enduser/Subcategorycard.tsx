// components/ServiceCard.tsx
import Image from "next/image";
import {usePathname, useRouter } from "next/navigation";
import {set} from '@/store/selectedSubCategorySlice'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

type Parameters = {
  id: number;
  title: string;
  title2: string;
  main_image: string;
  description: string;
  icon_image: string;
  category: "general" | "technical" | "interior";
};

export default function SubCategoryCard({
  id,
  title,
  title2,
  main_image,
  description,
  icon_image,
  category,
}: Parameters) {

  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const selectedId = useSelector((state: RootState) => state.selectedSubCategory);
  const isSelected = selectedId === id;
  const cardBorder = isSelected ? "border-blue-600" : "border-transparent";

  // ✅ determine colors based on `isService`
const bgColor = category=="interior"
  ? "bg-pink-500"
  : category == "technical"
    ? "bg-orange-500"
    : "bg-blue-600";

const textColor = category == "technical"
  ? "text-pink-700"
  : category == "interior"
    ? "text-orange-700"
    : "text-blue-700";

const borderColor = category == "interior"
  ? "border-pink-700"
  : category == "technical"
    ? "border-orange-700"
    : "border-blue-700";


    const handleClick = (id: number) => {
      dispatch(set(id));
       if (pathname === '/home') {
      router.push(`buying-page/${category}`); // ✅ Navigate only if on home page
    } 
    }
  return (
    <div className={`bg-white rounded-2xl shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] p-4 w-full flex flex-col justify-between border border-blue-600 ${cardBorder}`}>
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[206px] rounded-xl overflow-hidden mb-4">
          <Image
            src={main_image? main_image : "/end-user/1stcard.jpg"}
            alt={`${title} ${title2}`}
          fill
             className="object-cover"

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
{ category!="interior" &&
        <p className="text-gray-500 text-sm mb-3">{description}</p>
}      </div>

      <button onClick={()=>handleClick(id)} className={`${textColor} ${borderColor} border w-full py-2 text-sm rounded-full`}>
        {category=="interior" ? "Inspection" : "Book now"}
      </button>
    </div>
  );
}
