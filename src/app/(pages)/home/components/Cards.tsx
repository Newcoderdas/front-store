"use client"

import { Heart, Eye } from "lucide-react"
import React, { forwardRef } from "react";


interface Product {
  id: number
  name: string
  image: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: "/iphone14.jpg",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: "/iphone14.jpg",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: "/iphone14.jpg",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: "/iphone14.jpg",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
  },
  {
    id: 5,
    name: "Gaming Mouse Pro",
    image: "/iphone14.jpg",
    price: 250,
    originalPrice: 300,
    discount: 20,
    rating: 4,
    reviews: 65,
  },
  {
    id: 6,
    name: "Ultra HD Webcam",
    image: "/iphone14.jpg",
    price: 500,
    originalPrice: 600,
    discount: 15,
    rating: 5,
    reviews: 120,
  },
]

const Cards = forwardRef<HTMLDivElement>((_,ref) => {       
    return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap">
  <div className="flex gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-lg relative min-w-[250px] group"
      >
        <div className="p-2">
          <div className="aspect-square relative mb-1 overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm z-10">
              -{product.discount}%
            </div>
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-sm">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-sm">
                <Eye className="w-5 h-5" />
              </button>
            </div>
            
            <button className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white py-2 px-4 rounded">
              Add To Cart
            </button>
          </div>
          <h3 className="font-bold mb-1">{product.name}</h3>
          <div className="flex gap-2 mb-1">
            <span className="text-red-500">${product.price}</span>
            <span className="text-gray-400 line-through">${product.originalPrice}</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-lg ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}>
                ★
              </span>
            ))}
            <span className="text-gray-400 text-sm">({product.reviews})</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
});
export default Cards