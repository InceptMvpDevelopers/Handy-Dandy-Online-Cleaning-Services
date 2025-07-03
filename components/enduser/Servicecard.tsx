// components/ServiceCard.tsx
"use client"
import Image from "next/image";
import { services_3 } from "@/app/types/types";
import { useRouter } from "next/navigation";
import {toast, Toaster} from "sonner";

type Parameters = {
service: services_3
};

export default function ServiceCard({
service
}: Parameters) {
  // ✅ determine colors based on `isService`

const router = useRouter();

const handleClick = () => {
  if(service.order_type=='apply-form')
router.push('/apply-form-1')
  else{
toast.error('Functionality Not Implemented Yet!');
  }
}

  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] p-4 min-w-[280px] w-full max-w-[280px]  flex flex-col justify-between">
      <Toaster position="top-right" richColors/>
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[206px] rounded-xl overflow-hidden mb-4">
          <Image
            src={service.image_url? service.image_url : "/end-user/service-default.jpg"}
            alt={`${service.title}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
       
          <div className="flex flex-col text-[20px] leading-tight">
            <span className="font-[600]">{service.title}</span>
            <div className="flex gap-2"><span className="font-[400] text-base text-gray-500">Starts at</span><span className="font-[400] text-blue-600 text-base">{service.price}</span></div>

        </div>

        <p className="text-gray-500 text-sm mb-3">{service.description}</p>
      </div>

      <button onClick={handleClick} className= "text-white bg-blue-600  w-full py-2 text-sm rounded-full">
       Instant Cleaning
      </button>
    
    </div>
  );
}
