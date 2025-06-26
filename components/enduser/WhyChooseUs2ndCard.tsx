// components/WhyChooseUsCard.tsx
import Image from "next/image";

type Parameters = {
 
  main_image: string;

  description2: string[]; // ✅ fixed typo and syntax
};

export default function WhyChooseUs2ndCard({

  main_image,

  description2, // ✅ fixed
}: Parameters) {
  return (
    <div className="bg-blue-600 rounded-2xl shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] p-4 w-full flex-1  min-w-[280px] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
   <div className="relative w-[62px] h-[62px] overflow-hidden mb-4 border border-blue-700 rounded-full bg-white">
  <Image
    src={main_image}
    alt={"title"}
    fill
    className="object-contain p-2" // 👈 This shrinks the image *inside* the 62px container
  />
</div>


   

        <ul className="text-white font-[300] text-[18px] text-left list-disc list-inside space-y-1">
          {description2.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      <button className="bg-white h-[63px] w-full rounded-full">Call Now</button>
    </div>
  );
}
