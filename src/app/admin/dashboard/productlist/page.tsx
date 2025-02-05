"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [products, setProducts] = useState([]);

      useEffect(() => {
        const fetchProducts = async () => {
          try{
            const res = await axios.get("/api/getproduct");
            setProducts(res?.data);
          } catch (error) {
            console.error("Error Fetching Products", error);
          }
        };
        fetchProducts();
      },[])

  return (
<>
    <div className="pt-10 flex justify-center">
      <h1 className="text-lg lg:text-4xl md:text-2xl font-bold">Product List</h1>
    </div>

    <div className="mt-4 overflow-x-auto">
      <table className="bg-white border min-w-full md:min-w-[72rem] md:ml-[200px] shadow-md rounded-lg">
        <thead className="bg-red-200 uppercase">
          <tr className="text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Discounted Price</th>
            <th className="p-3">Discount %</th>
            <th className="p-3">Created At</th>
            <th className="p-3 text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product:any, index:number) => {
            
            return (
              <tr key={product.id || index} className="border-b hover:bg-red-50">
                <td className="p-3">
                  <img src={product.media} alt={product.name} className="w-12 h-12 rounded-md object-cover" />
                </td>
                <td className="p-3">{product.title}</td>
                <td className="p-3">Rs. {product.price}</td>
                <td className="p-3 text-red-500">${product.price - ( product.price / 100 * product.discount) }</td>
                <td className="p-3 text-green-600 font-bold">{product.discount}%</td>
                <td className="p-3">{product.createdAt}</td>
                <td className="p-3 flex gap-2 justify-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">Update</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
</>
  );
}

export default page