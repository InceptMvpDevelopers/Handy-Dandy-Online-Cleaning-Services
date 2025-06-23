import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import dynamic from "next/dynamic";


export default function Hero() {
  // const AnimatedCounter = dynamic(() => import("./AnimatedCounter"), { ssr: true });
  return (
    
      <section
        className="relative h-[400px] sm:h-[500px] md:h-[658px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      >
        <div className="container mx-auto px-2 sm:px-4 pt-16 sm:pt-24 md:pt-32 pb-20 sm:pb-32 md:pb-40 lg:px-14 ">
          <div className="max-w-2xl">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-[50px]">
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                <span className="md:whitespace-nowrap">
                  WORKING <span className="italic font-normal">YOU CAN TRUST</span>
                </span>
                <br />
                <span className="md:whitespace-nowrap">
                  COMFORT <span className="italic font-normal">YOU CAN FEEL</span>
                </span>
              </h1>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-[#7E8487] font-normal ">  <span className="text-blue-600  font-bold">"<a href="https://handydandy.ae" target="_blank" rel="noopener noreferrer" className="underline">HandyDandy.ae</a></span> is bringing you an extraordinary experience. We're building cutting-edge technology and an intuitive app—while already offering seamless services. Stay tuned, the future is coming!"</p>
              </div>
            </div>
            <a href="mailto:Info@handydandy.ae" className="inline-block">
              <Button className="bg-[#1852F9] hover:bg-blue-700 text-white px-4 md:px-4 py-2 md:py-3 text-sm sm:text-base md:text-lg rounded-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

     

  )
}
