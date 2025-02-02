"use client"
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Camera, Smartphone, Monitor, Watch, Headphones, Gamepad2 } from 'lucide-react';

const Categories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Left Scroll Function
  const scrollLeft = () => {
    if (scrollRef.current) {
      (scrollRef.current as HTMLElement).scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Right Scroll Function
  const scrollRight = () => {
    if (scrollRef.current) {
      (scrollRef.current as HTMLElement).scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='mt-4 max-w-[92rem] p-10 mx-auto'>
        {/* Header */}
        <div className='flex items-center gap-2'>
          <span className='bg-red-500 px-2 py-5'></span>
          <span className='text-red-600 font-semibold'>
            <h1>Categories</h1>
          </span>
        </div>

        <div className='md:flex mx-auto justify-between items-center'>
          <div className="mt-3 lg:flex items-center gap-16">
            <h1 className='text-2xl lg:text-4xl font-bold'>Browse By Category</h1>
          </div>

          <div className='flex gap-1 mt-5'>  
          <ArrowLeft  onClick={scrollLeft} className='bg-slate-300 rounded-lg p-1'/>
          <ArrowRight onClick={scrollRight} className='bg-slate-300 rounded-lg p-1' />
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-full mt-16 overflow-hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-6 w-max overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="border border-black rounded-md h-40 w-44 flex flex-col items-center justify-center">
              <Smartphone className='h-10 w-10' />
              Phones
            </div>
            <div className="border border-black rounded-md h-40 w-44 flex flex-col items-center justify-center">
              <Monitor className='h-10 w-10' />
              Computers
            </div>
            <div className="border border-black rounded-md h-40 w-44 flex flex-col items-center justify-center">
              <Watch className='h-10 w-10' />
              SmartWatch
            </div>
            <div className="border border-black rounded-md h-40 w-44 flex flex-col items-center justify-center">
              <Camera className='h-10 w-10' />
              Camera
            </div>
            <div className="border border-black rounded-md h-40 w-44 flex flex-col items-center justify-center">
              <Headphones className='h-10 w-10' />
              Headphones
            </div>
            <div className="border border-black rounded-md h-40 w-44 flex flex-col items-center justify-center">
              <Gamepad2 className='h-10 w-10' />
              Gaming
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
