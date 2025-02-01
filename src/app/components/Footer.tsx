import React from 'react'
import { SendHorizontal } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {

  const url = "https://starclasses.netlify.app/";

  return (
    <>
      <div className="mt-10 bg-black text-white max-w-[92rem] mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-8 justify-items-center'>
        
          <div className="col-span-1 md:col-span-1 lg:col-span-1 text-center md:text-left">
            <h1 className="text-2xl font-bold">Front-Store</h1>
            <h1 className="text-xl mt-4">Subscribe</h1>
            <p className='text-sm mt-4'>Get 10% off on your first order</p>
            <div className='flex justify-center md:justify-start max-w-[13rem] border rounded p-1 mt-2'>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none text-gray-400 flex-grow"
              />
              <button>
                <SendHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-xl">Support</h1>
            <h1 className="mt-4">Malir Near Jinnah International Airport, Karachi</h1>
            <h1 className="mt-4">syedraghibhussainnaqvi@gmail.com</h1>
            <h1 className="mt-4">+92 311 8092828</h1>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-xl">Account</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">My account</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">Login/Register</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">Cart</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">WishList</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">Shop</h1>
          </div>


          <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-xl">Quick Links</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">Home</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">About</h1>
            <h1 className="mt-4 cursor-pointer hover:font-medium">Contact</h1>
          </div>


          <div className="col-span-1 md:col-span-1 lg:col-span-1 justify-items-center  mt-6 md:mt-0 md:text-left">
            <h1 className="text-xl">Download App</h1>
            <p className="mt-5 text-xs">Save $3 With App, New Users Only</p>
            <QRCodeSVG value={url} size={100} className='mt-2' />
            <div className="mt-2 flex gap-2">
              <Facebook  className='hover:text-blue-600'/>
              <Twitter   className='hover:text-blue-300'/>
              <Instagram className='hover:text-red-400'/>
              <Linkedin  className='hover:text-blue-400'/>
            </div>
          </div>

        </div>
        <p className='flex justify-center text-gray-400 pb-10'>&copy; 2025 Syed Raghib Hussain Naqvi. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
