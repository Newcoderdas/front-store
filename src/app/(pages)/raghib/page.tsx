import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-cyan-400 to-blue-300 flex items-center justify-center h-screen'>
      
      <div className='bg-white bg-blur-sm bg-opacity-75 p-6 rounded-2xl shadow-[0px_-18px_0px_12px_rgba(255,_255,_255,_0.5)] w-96 flex gap-x-5 '>
        <Image src='/profile.jpeg' alt="Remote Example" width={50} height={50} className='w-12 h-12 object-cover rounded-full'/>

        <div>
          <h1 className="font-bold">Syed Raghib Hussain</h1>
          <p className='text-sm'>@raghibhussain</p>
          <p className="mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="columns-3 mt-2 text-start">
          <div className='font-bold text-sm'><h1>7346</h1>followers</div>
          <div className='font-bold text-sm'><h1>2M</h1>views</div>
          <div className='font-bold text-sm'><h1>3rd</h1>rank</div>
          </div>

          <div className='mt-5 flex gap-5 text-sm'>
          <button className='bg-black text-white px-4 py-1 rounded border-solid border border-black flex items-center hover:bg-transparent hover:text-black'>Follow</button>
            <button className='bg-transparent border-solid border border-black text-black px-4 py-1 rounded flex items-center hover:bg-black hover:text-white'>View Profile</button>
          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default page