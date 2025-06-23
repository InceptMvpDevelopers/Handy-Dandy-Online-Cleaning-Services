import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    name: "Space Cleaning",
    description: "From homes to offices, we clean it all. Professional service with a personal touch.",
    image: "/Landing-page/2.jpg",
    icon: "/Landing-page/cleaning.png", // placeholder, replace with your icon
    bgColor: "bg-blue-600",
  },
  {
    name: "Technical Services",
    description: "Expert care for all your technical needs. We install, maintain, and optimize with care.",
    image: "/Landing-page/1.jpg",
    icon: "/Landing-page/technical.png", // placeholder, replace with your icon
    bgColor: "bg-orange-600",
  },
  {
    name: "Interior Design",
    description: "From concept to creation, we style your space, professionally designed.",
    image: "/Landing-page/3.jpg",
    icon: "/Landing-page/interior.png", // placeholder, replace with your icon
    bgColor: "bg-fuchsia-600",
  },
]

export default function Services() {
  return (
    <section className="pt-20  pb-16 lg:pb-[50px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`${service.bgColor} rounded-2xl shadow-lg flex flex-col items-center p-4  transition-transform hover:scale-105 hover:cursor-pointer w-full max-w-[370px] mx-auto`}>
              <CardContent className="flex flex-col gap-4 p-2 w-full">
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 bg-white bg-opacity-20">
                    <img src={service.icon} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center whitespace-nowrap">{service.name}</h3>
                </div>
                <p className="text-white text-xs sm:text-sm md:text-base  mb-4 font-normal">{service.description}</p>
             
                <div className="w-full flex justify-center mt-auto">
                  <div className="w-full h-30 sm:h-48 md:h-56">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
