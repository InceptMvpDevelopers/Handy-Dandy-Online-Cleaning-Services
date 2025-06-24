import React from 'react';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
const FAQs = () => {
    const faqs = [
        {
            question: "How do I book a service with HandyDandy.de?",
            answer: "You can easily book our services through our website or mobile app. Just select your service, choose a time slot, and confirm your booking. We'll send you a confirmation with all the details."
        },
        {
            question: "What types of services do you offer?",
            answer: "We offer a wide range of home services including cleaning, plumbing, electrical work, handyman services, gardening, and more. Visit our services page for a complete list."
        },
        {
            question: "Are your service providers background-checked and trained?",
            answer: "Yes, all our service providers undergo thorough background checks and receive professional training to ensure high-quality service and your complete safety."
        },
        {
            question: "Do you bring your own supplies and equipment?",
            answer: "Absolutely! Our professionals come fully equipped with all necessary tools and high-quality supplies. For cleaning services, we use eco-friendly products unless you request otherwise."
        }
    ];

    return (
      <section className="py-12 bg-white flex flex-col xl:flex-row flex-wrap gap-8">

            <div className="container flex-[1] min-w-[280px] mx-auto ">

                <div className="flex text-[#282828] text-[52px] gap-x-2 text-center flex-wrap justify-center">
                    <span className="font-[600]">FREQUENTLY ASKED</span>
                    <span className="font-[400] italic">QUESTIONS</span>
                </div>
            </div>
            {/* Review Section */}
            <div className=" flex-[1] flex min-w-[280px]  gap-8">
                <div className="space-y-6 w-full">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg  shadow-md overflow-hidden">
                            <details className="group">
                                <summary className="flex justify-between items-center p-6 cursor-pointer">
                                    <h3 className="text-[16px] font-medium text-black">
                                        {faq.question}
                                    </h3>
                                    <div className="text-red-600">
                                        <GoPlus className="w-10 h-10 group-open:hidden" />
                                        <HiOutlineMinus className="w-10 h-10 hidden group-open:block" />
                                    </div>
                                </summary>
                                <div className="px-6 pb-6 pt-0 text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;