import React from 'react'
import Link from 'next/link'
import Carousel from './components/Carousel'
import Flashsales from './components/Flashsales'

const page = () => {
  return (
    <>
    
    <div className="max-w-[100rem] mx-auto grid sm:grid-cols-12 p-5 gap-x-5 items-center">

    <div className="col-span-full text-center sm:col-span-3 sm:flex-col sm:text-start lg:text-sm sm:text-xs font-medium px-6 border-r-2">
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Woman's Fashion</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Man's fashion</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Electronics</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Home & Lifestyle</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Medicine</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Sports & Outdoor</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>baby's & toys</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Groceries & Pets</Link></div>
       <div className='p-2 hover:scale-105 transition-transform'><Link href=''>Health & Beauty</Link></div>
    </div>
      <div className="col-span-full sm:col-span-9 mt-4">
        <Carousel/>
        </div>

    </div>

    <div><Flashsales/></div>
    
    </>
  )
}

export default page