'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const Bar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const closeNav = () => {
    setNavbar(!navbar)
  };
  
  return (
    <>
      <header className="border-b fixed top-0 left-0 w-full shadow-sm bg-white z-50">
      <div className="flex max-w-[100rem] mx-auto bg-black text-white text-sm py-2 ">

        <div className="flex mx-auto items-center gap-2">
          <p className="text-center text-xs flex-1 md:text-md">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="#" className="hover:underline font-semibold">
              ShopNow
          </Link>
        
        </div>
        <div className="hidden md:block lg:block items-start w-60 space-x-4">
            
            <select className="bg-black border-none text-white focus:outline-none">
              <option>English</option>
              <option>Urdu</option>
              <option>Español</option>
            </select>
          </div>
      </div>

        <nav className="container mx-auto px-4 pl-20 py-4 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center w-full ">
              <Image src="/front-store.png" alt="logo" width={50} height={30} />
              <h1 className="text-2xl font-bold mr-24">Front-Store</h1>
              <div className='flex mx-auto'>

              <ul className="hidden lg:flex space-x-8 mt-1">
               
                  <li className="block  hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="">
                      Home
                    </Link>
                  </li>

                  <li className="block  hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="">
                      About
                    </Link>
                  </li>

                  <li className="block  hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="">
                      Contact
                    </Link>
                  </li>

                  <li className="block  hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="">
                      Signup
                    </Link>
                  </li>
                
              </ul>
                      </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className={`border rounded-md py-2 px-3 placeholder:text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-primary ${
                    isSearchFocused ? 'ring-2 ring-primary' : ''
                  }`}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <Search className={`absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 h-5 w-5 ${
                  isSearchFocused ? 'text-primary' : 'text-gray-400'
                }`} />
              </div>
              <button aria-label="Wishlist">
                <Heart className="h-6 w-6" />
              </button>
              <button aria-label="Shopping cart">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
{/* hamburger */}
            <button
              className="lg:hidden text-black focus:outline-none"
              onClick={closeNav}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={navbar ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            navbar ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-6 space-y-4">
            <button
              className="absolute top-4 right-4 text-black focus:outline-none"
              onClick={closeNav}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="">
               
                  <li className="block py-3 hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="" onClick={closeNav}>
                      Home
                    </Link>
                  </li>

                  <li className="block py-3 hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="" onClick={closeNav}>
                      About
                    </Link>
                  </li>

                  <li className="block py-3 hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="" onClick={closeNav}>
                      Contact
                    </Link>
                  </li>

                  <li className="block py-3 hover:font-medium border-black hover:border-b-2 transition-transform">
                    <Link href="" onClick={closeNav}>
                      Signup
                    </Link>
                  </li>
                
              </ul>

              <select className="border-none text-black focus:outline-none">
              <option>English</option>
              <option>Urdu</option>
              <option>Español</option>
            </select>
            
            <div className="pt-4">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Bar
