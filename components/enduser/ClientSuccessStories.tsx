import React from 'react';
import Image from 'next/image';

const ClientSuccessStories = () => {
  return (
   <section className="py-12 bg-white flex flex-col xl:flex-row flex-wrap gap-8">

      <div className="container flex-[1] min-w-[280px] mx-auto ">
  <div className="flex flex-col flex-[3]  min-w-[300px]">
    <div className="flex text-[#282828] text-[52px] gap-x-2 text-center flex-wrap justify-center">
      <span className="font-[600]">Client</span>
      <span className="font-[400] italic">SUCCESS</span>
    </div>
    <span className="font-[600] text-[#282828] text-[52px] mt-2 text-center">
      STORY AND REVIEW
    </span>
  </div>

        <div className="flex  gap-8 gap-12 rounded-[20px] bg-blue-700 ">
          {/* Stats Section */}
          <div className="flex-[1] flex justify-center flex-wrap gap-2">
            <div className="p-6 min-w-[200px] rounded-lg text-center flex flex-col justify-center">
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-white mt-2">Options</p>
            </div>
            <div className=" p-6  rounded-lg min-w-[200px] text-center flex flex-col justify-center">
              <p className="text-4xl font-bold text-white ">9184+</p>
              <p className="text-white mt-2">Clients</p>
            </div>
            <div className=" p-6 rounded-lg min-w-[200px] text-center flex flex-col justify-center">
              <p className="text-4xl font-bold text-white">1000+</p>
              <p className="text-white mt-2">Housekeepers</p>
            </div>
          </div>

          
        </div>
      
      </div>
        {/* Review Section */}
          <div className=" flex-[1] flex min-w-[280px] bg-[#E6E8E8] gap-8 shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)]
  p-8 rounded-lg">
 <div className="w-[142px] h-[142px] rounded-full overflow-hidden shrink-0 relative">
  <Image 
    src="/end-user/profile.jpg"
    alt="Client photo"
    fill
    className="object-cover"
  />
</div>

            <div className='flex flex-col'>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-700">5.0</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "HansyPenny is a lifesaver! I booked their deep cleaning service, and my home has never looked better. The team was punctual, professional, and paid attention to every detail. I love how easy it was to book online, and the pricing was very reasonable. Highly recommend!"
                </blockquote>
                <p className="font-semibold text-gray-800">Jerry Wilson</p>
            </div>
          </div>
    </section>
  );
};

export default ClientSuccessStories;