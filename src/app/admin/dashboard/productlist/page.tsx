"use client"
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import UpdateModal from "../../component/UpdateModal";

interface ProductProps {
  _id: string;
  title: string;
  price: number;
  discount: number;
  media: string;
  createdAt: string;
}

const Page = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/getproduct");
        
        setProducts(res?.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error Fetching Products", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/product-delete/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (data: {
    title: string;
    description: string;
    price: number;
    discount: number;
    media: string;
  }) => {
    console.log("Form Data Submitted:", { ...data, productId: selectedProductId });
  };
  useEffect(() => {
    const fetchUpdatedProduct = async () => {
      if (!isModalOpen && selectedProductId) {
        try {
          const res = await axios.get(`/api/get-product-by-id/${selectedProductId}`);
          console.log("responses",res)
          const updatedProduct = res.data;
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product._id === selectedProductId ? updatedProduct : product
            )
          );
        } catch (error) {
          console.error("Error updating product", error);
        }
      }
    };
    fetchUpdatedProduct();
  }, [isModalOpen, selectedProductId]);

  const handleUpdateClick = (id: string) => {
    setSelectedProductId(id);
    setModalOpen(true);
  };

  return (
    <>
      <div className="pt-10 flex justify-center">
      <h1 className="text-lg lg:text-4xl md:text-2xl font-bold">Product List</h1>
      </div>

      {/* Container for Responsive Layout */}
      <div className="mt-4 flex justify-end">
        <div className="w-full md:w-[calc(100%-250px)] px-4 md:px-8 overflow-x-auto">
          {isLoading ? (
            <div className="flex gap-2 h-20">
               <h1 className="text-2xl font-bold">Loading</h1>
              <div className="w-10 h-10 border-4 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="border min-w-full md:min-w-[60rem] shadow-md rounded-lg">
                <thead className="bg-gray-700 text-white uppercase">
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
                  {products.map((product: any, index: number) => {
                    return (
                      <tr key={product.id || index} className="border-b hover:bg-gray-200">
                        <td className="p-3">
                          <img
                            src={product.media}
                            alt={product.title}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                        </td>
                        <td className="p-3">{product.title}</td>
                        <td className="p-3">Rs. {product.price}</td>
                        <td className="p-3 text-red-500">
                          Rs. {product.price - (product.price / 100) * product.discount}
                        </td>
                        <td className="p-3 text-green-600 font-bold">{product.discount}%</td>
                        <td className="p-3">{format(new Date(product.createdAt), "dd MMM yyyy, hh:mm a")}</td>
                        <td className="p-3 flex gap-2 justify-center">
                          <button
                            onClick={() => handleUpdateClick(product._id)}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Item Details"
        onSubmit={handleFormSubmit}
        productId={selectedProductId}
      />
    </>
  );
};

export default Page;
