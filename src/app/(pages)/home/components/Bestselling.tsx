"use client"
import { Heart, Eye, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import bestSelling from '../../../../../data/bsitems';
import axios from 'axios';

// interface product {
//     id: number;
//     title: string;
//     media: string;
//     price: number;
//     discount: number;
//     description: string;
//   }

const Bestselling = () => {

    const [clickedHearts, setClickedHearts] = useState<Map<number, boolean>>(new Map());
      const [selectedImage, setSelectedImage] = useState<string | null>(null);
      const [products, setProducts] = useState([]);

      useEffect(() => {
        const fetchProducts = async () => {
          try{
            const res = await axios.get("/api/getproduct");
            // console.log("this is the response :",res?.data);
            setProducts(res?.data);
          } catch (error) {
            console.error("Error Fetching Products", error);
          }
        };
        fetchProducts();
      },[])
    
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
    <>
      <div className='mt-4 max-w-[92rem] p-10 mx-auto'>
      <div className=' flex items-center gap-2 '>
       <span className='bg-red-500 px-2 py-5'></span><span className='text-red-600 font-semibold'><h1>This Month</h1></span>
    </div>

    <div className='md:flex mx-auto justify-between items-center'>  

<div className="mt-3 lg:flex items-center gap-16">
  <div>
      <h1 className='text-2xl lg:text-4xl font-bold'>Best Selling Products</h1>
  </div>  
</div>


<div>  
<button className='bg-red-500 text-sm text-white p-2.5 px-10 mt-4 hover:bg-red-600 transition transform'>View All</button>
</div>

</div>
{/* cards */}
<div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product:any) => (
          <div
            key={product.id}
            className="bg-white rounded-lg relative max-w-[250px] group">
            <div className="p-2">
              <div className="aspect-square relative mb-1 overflow-hidden">
                <img
                  src={product.media || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-64 h-64 mx-auto"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm z-10">
                  -{product.discount}%
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button
                    className={`p-2 rounded-full shadow-sm ${
                      clickedHearts.get(product.id) ? "bg-red-500 text-white" : "bg-white text-red-500"
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
              <h3 className="font-bold mb-1">{product.title}</h3>
              <div className="flex gap-2 mb-1">
                <span className="text-red-500">${product.price - ( product.price / 100 * product.discount) }</span>
                <span className="text-gray-400 line-through">${product.price}</span>
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

      </div>
    </>
  )
}

export default Bestselling
