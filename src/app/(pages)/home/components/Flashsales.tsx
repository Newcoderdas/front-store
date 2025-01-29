  'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react'
import { useState, useEffect } from "react";
import { useRef } from "react";
import Cards from './Cards';


interface TimeLeft {
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
}

const Flashsales: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" }); 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

    const targetDate = new Date("2025-01-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (targetDate) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        
        const distance = targetDate - now;

        if (distance <= 0) {
          clearInterval(interval);
          setTimeLeft({
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          });
        } else {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <>

<div className='mt-2 max-w-[92rem] mx-auto p-5'>

<div className=' flex items-center gap-2 '>
  <span className='bg-red-500 px-2 py-5'></span><span className='text-red-600 font-semibold'><h1>Today's</h1></span>
</div>

<div className='md:flex mx-auto justify-between items-center'>  

<div className="mt-3 lg:flex items-center gap-16">
  <div>
      <h1 className='text-2xl lg:text-4xl font-bold'>Flash Sales</h1>
  </div>

  <div className="mt-4 lg:mt-0 flex space-x-4 mb-4">
  <div className="flex flex-col items-center">
    <span className="text-xs lg:text-xs  uppercase">Days</span>
    <span className="text-2xl lg:text-4xl font-bold">{days}</span>
  </div>
  <span className="text-2xl lg:text-4xl mt-3 text-red-500">:</span>
  <div className="flex flex-col items-center">
    <span className="text-xs lg:text-xs  uppercase">Hours</span>
    <span className="text-2xl lg:text-4xl font-bold">{hours}</span>
  </div>
  <span className="text-2xl lg:text-4xl mt-3 text-red-500">:</span>
  <div className="flex flex-col items-center">
    <span className="text-xs lg:text-xs  uppercase">Minutes</span>
    <span className="text-2xl lg:text-4xl font-bold">{minutes}</span>
  </div>
  <span className="text-2xl lg:text-4xl mt-3 text-red-500">:</span>

  <div className="flex flex-col items-center">
    <span className="text-xs lg:text-xs  uppercase">Seconds</span>
    <span className="text-2xl lg:text-4xl font-bold">{seconds}</span>
  </div>
</div>
</div>

<div className='flex gap-1'>  
<ArrowLeft  onClick={scrollLeft} className='bg-slate-300 rounded-lg p-1'/>
<ArrowRight onClick={scrollRight} className='bg-slate-300 rounded-lg p-1' />
</div>

</div>

{/* cards */}
<Cards ref={scrollRef}/>

</div>
<div className="flex justify-center"> 
  <button className='bg-red-500 text-sm text-white p-2.5 px-10 mt-4 hover:bg-red-600 transition transform'>View All Products</button>
</div>


    </>
  )
}

export default Flashsales


