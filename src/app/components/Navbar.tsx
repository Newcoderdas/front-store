import Link from 'next/link'
import React from 'react'

const Bar = () => {
  return (
    <div className="flex bg-blue-700  p-10 gap-3 underline  items-center justify-center max-w-[500px] rounded-lg  w-full mx-auto  mt-44 text-white font-bold ">

         
              
    <Link href="/akber" className='hover:text-gray-300'> Akber ka Page</Link>
    <Link href="/raghib" className='hover:text-gray-300'>raghib ka Page</Link>
    <Link href="/daniyal" className='hover:text-gray-300'>Daniyal ka Page</Link>
    
     </div>
  )
}

export default Bar