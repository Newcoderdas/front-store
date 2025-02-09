"use client";
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const getLink = (path:any) =>
    pathname === path ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-gray-700";

  return (
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 text-black fixed top-4 left-4 z-50"
      >
        <HiMenu size={24} />
      </button>

      {/* Sidebar */}
      <Sidebar
        className={`bg-gray-900 bg-opacity-90 backdrop-blur-lg border-r min-h-screen fixed z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          w-[240px] p-5 shadow-2xl rounded-r-2xl`}>

       <div className="flex items-center pt-10 md:pt-0">
       <Image src="/front-store.png" alt="logo" width={40} height={40} />
       <h1 className="text-xl text-white font-bold">Front-Store</h1>
       </div>
        <Sidebar.Items className="font-bold">
          <Sidebar.ItemGroup>
            <Link href="/admin/dashboard" passHref>
              <Sidebar.Item  className={`${getLink('/admin/dashboard')} text-xl mb-2 mt-2 md:mt-0 font-bold`} as="div" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
            </Link>
        
            <Sidebar.Collapse 
            icon={HiShoppingBag} 
            label="Products"
            open={pathname.startsWith('/admin/dashboard/product')}
            className={`hover:bg-gray-700 ${pathname.startsWith('/admin/dashboard/product') ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
          >
              <Link href="/admin/dashboard/productlist" passHref>
                <Sidebar.Item as="div" className={getLink('/admin/dashboard/productlist')} >Product list</Sidebar.Item>
              </Link>

              <Link href="/admin/dashboard/productadd" passHref>
                <Sidebar.Item as="div" className={getLink('/admin/dashboard/productadd')}>Add Product</Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Overlay for Mobile View */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidenavbar;
