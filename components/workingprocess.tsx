import Image from "next/image"
const workingprocess = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 sm:py-12 px-4">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Our Working Process</h1>
        <p className="text-gray-500 font-normal text-sm sm:text-base text-center">We follow the way to work</p>
      </div>
  
        <div className="container p-4 flex justify-center items-center">

          <Image src="/Landing-page/workingprocess.svg" alt="workingprocess" width={1200} height={600} className="h-auto object-contain" />
        </div>
 
      
    </div>
  )
}

export default workingprocess