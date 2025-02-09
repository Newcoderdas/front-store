"use client";
import { Heart, Eye, X } from "lucide-react";
import { forwardRef, useState } from "react";
import React from "react";
import flashSales from "../../../../../data/items";



const Cards = forwardRef<HTMLDivElement>((_, ref) => {
  const [clickedHearts, setClickedHearts] = useState<Map<number, boolean>>(new Map());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (productId: number) => {
    setClickedHearts((prev) => {
      const newMap = new Map(prev);
      newMap.set(productId, !prev.get(productId));
      return newMap;
    });
  };

  const handleEyeClick = (image: string) => {
    setSelectedImage(image); 
  };

  const closeModal = () => {
    setSelectedImage(null); 
  };

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap">
      <div className="flex gap-6">
        {flashSales.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg relative min-w-[250px] group"
          >
            <div className="p-2">
              <div className="aspect-square relative mb-1 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-64 h-64 mx-auto"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm z-10">
                  -{product.discount}%
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button
                    className={`p-2 rounded-full shadow-sm ${
                      clickedHearts.get(product.id) ? "bg-red-500 text-white" : "bg-white text-black"
                    }`}
                    onClick={() => handleClick(product.id)}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-sm"
                    onClick={() => handleEyeClick(product.image)}
                  >
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
                  <span
                    key={i}
                    className={`text-lg ${
                      i < product.rating ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-400 text-sm">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 p-2"
              onClick={closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
});
Cards.displayName = "Cards";
export default Cards;