import Image from "next/image";
const banner = () => {

    const offer = [
        { 
          id: 1, 
          image: "/jbl.png",  
          description: "Enhance Your Music Experience",
          cta: "Shop Now"
        }
      ];


  return (
    <div className="relative max-w-[70rem] mx-auto h-[500px] overflow-hidden bg-black">
            <div className=" text-blue-500 p-12 mt-8 flexspace-x-2">
              <span className="text-sm lg:text-lg">Categories</span>
            </div>
      {/* Slides */}
      {offer.map((product) => (
        
        <div
          key={product.id}
          className={`absolute inset-0 flex items-center justify-between p-12 transition-opacity duration-500`}
        >
          <div className="text-white mt-8 space-y-4 w-1/2">
            
            <h2 className="text-xl md:text-3xl lg:text-5xl mb-6 font-semibold">{product.description}</h2>
{/* countdown */}
<div className="mt-4 hidden sm:flex space-x-2">
  {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
    <div 
      key={index} 
      className="mb-4 flex flex-col items-center text-white w-16 h-16 sm:w-12 sm:h-12 lg:w-12 lg:h-12 font-bold text-center"
    >
      <p className="text-sm sm:text-lg lg:text-2xl">00</p>
      <p className="text-[8px] sm:text-xs">{label}</p>
    </div>
  ))}
</div>
            <button className='bg-blue-500 rounded-sm text-xs lg:text-sm text-white py-1 px-4 md:p-2 md:px-8 hover:bg-blue-600 transition transform'>
              Buy Now!
            </button>

{/* small screen countdown */}
<div className="mt-4 flex sm:hidden space-x-2">
  {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
    <div 
      key={index} 
      className="flex flex-col items-center text-white w-16 h-16 sm:w-12 sm:h-12 lg:w-12 lg:h-12 p-2 font-bold text-center"
    >
      <p className="text-sm sm:text-lg lg:text-2xl">00</p>
      <p className="text-[10px] sm:text-xs">{label}</p>
    </div>
  ))}
</div>

          </div>
          <div className="w-[30rem] h-full relative">
            <Image 
              src={product.image} 
              alt={"Loading"} 
              fill 
              style={{objectFit: "contain"}}
              className="drop-shadow-[5px_-10px_30px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>
      ))}

    </div>
  );
};

export default banner
