import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    
      <div className='bg-gradient-to-r from-green-100 via-blue-300 to-green-100'>
        
        <div className="flex flex-col items-center justify-center h-screen">
          <div className=" bg-white/20   p-4  rounded-3xl shadow-md w-[32rem]">
          <div className=" bg-white/70  p-4  rounded-3xl shadow-md w-[30rem]">
            <div className='flex flex-row items-center gap-3'>
              
                
                <Image src='/1.jpg' alt="Remote Example " width={70} height={70} className='object-cover rounded-full mb-16'/>

             
             <div className='flex flex-col  text-start mb-5 ml-4'>
              <h1 className='font-bold'>Syed Akber Raza Rizvi </h1>  
                <h1 className='text-start font-bold'>@Akberrizvi </h1>  
                <p className='text-start text-sm mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi provident quod labore impedit dolore facilis! Nisi soluta quod,</p>
              </div>
              
              
            </div>
            <div className='flex items-center justify-center font-bold gap-20 text-lg'>
                <h1>
                  7483
                </h1>
                <h1>
                  2m
                </h1>
              <h1>4th </h1>
              
            </div>
            <div className='flex items-center justify-center font-bold gap-12 text-lg'>
              <h1>followers</h1>
              <h1>views</h1>
              <h1>rank</h1>
            </div>


            <div className='flex justify-center items-center gap-10 mt-4 '>
              <button className='bg-black -500 w-24 border border-black rounded-md h-8 hover:bg-white hover:text-black text-white '>Follow</button>
              <button  className='bg-white w-28 border border-black rounded-md h-8 hover:bg-blue-400  hover:text-black text-black'>View Profile</button>
            </div>
            
            </div>
            </div>
        </div>

      </div>

    </>
  )
}

export default page