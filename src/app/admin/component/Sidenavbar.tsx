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

  const getLink = (path: string) => (pathname === path ? "bg-gray-100" : "");
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
        className={`bg-red-400 border-r-4 min-h-screen fixed z-40 transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          max-w-[200px] `}>
       <div className="flex pt-10 md:pt-0">
       <Image src="/front-store.png" alt="logo" width={30} height={30} />
       <h1 className="text-2xl font-bold">Front-Store</h1>
       </div>
        <Sidebar.Items className="font-bold">
          <Sidebar.ItemGroup>
            <Link href="/admin/dashboard" passHref>
              <Sidebar.Item  className={`${getLink('/admin/dashboard')} text-xl mb-2 mt-2 md:mt-0 font-bold`} as="div" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
            </Link>
        
            <Sidebar.Collapse icon={HiShoppingBag} label="Products">
              <Link href="/admin/dashboard/productlist" passHref>
                <Sidebar.Item as="div" className={getLink('/admin/dashboard/productlist')} >Product list</Sidebar.Item>
              </Link>

              <Link href="/admin/dashboard/addproduct" passHref>
                <Sidebar.Item as="div" className={getLink('/admin/dashboard/addproduct')}>Add Product</Sidebar.Item>
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
