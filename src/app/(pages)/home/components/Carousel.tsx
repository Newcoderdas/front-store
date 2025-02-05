'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";

const Carousel = () => {
  const slides = [
    { 
      id: 1, 
      image: "/iphone14.jpg", 
      title: "iPhone 14 Series", 
      offer: "Up to 10%", 
      description: "off Voucher",
      cta: "Shop Now"
    },
    { 
      id: 2, 
      image: "/laptop.jpg", 
      title: "Latest Laptops", 
      offer: "Flat 15%", 
      description: "off on laptops",
      cta: "View More"
    },
    { 
      id: 3, 
      image: "/smartwatch.jpeg", 
      title: "Smart Watches", 
      offer: "Up to 20%", 
      description: "off on models",
      cta: "Shop Now"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-[100rem] mt-24 mx-auto grid sm:grid-cols-12 p-5 gap-x-5 items-center">

    <div className="col-span-full text-center sm:col-span-3 sm:flex-col sm:text-start lg:text-sm sm:text-xs font-medium px-6 border-r-2">
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Woman&apos;s Fashion</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Man&apos;s fashion</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Electronics</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Home & Lifestyle</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Medicine</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Sports & Outdoor</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>baby&apos;s & toys</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Groceries & Pets</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Health & Beauty</Link></div>
    </div>
      <div className="col-span-full sm:col-span-9 mt-4">
      <div className="relative w-full h-[400px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-between p-12 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-white space-y-4 w-1/2">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{slide.title}</span>
            </div>
            <h2 className="text-2xl lg:text-5xl font-bold">{slide.offer}<br/>{slide.description}</h2>
            <button className="flex items-center text-lg hover:underline">
              {slide.cta} <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="w-[20rem] h-full relative">
            <Image 
              src={slide.image} 
              alt={slide.title} 
              fill 
              style={{objectFit: "contain"}}
            />
          </div>
        </div>
      ))}

    
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-orange-500 border border-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
        </div>

    </div>
  );
};

export default Carousel;

