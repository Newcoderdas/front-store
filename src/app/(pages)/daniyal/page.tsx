import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
      <div className='flex flex-row text-xl   items-center font-bold text-white max-w-[500px]  mx-auto mt-44 p-36  rounded-3xl shadow-lg bg-black'>
          <div className='flex gap-5'>
              <Image src="/download.jpg" height={32} width={32} alt='image' className='rounded-full bg-cover bg-center'/><h1>| Daniyal Page</h1></div>
          </div>
  )
}

export default page