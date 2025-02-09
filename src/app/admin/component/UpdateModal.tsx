import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface ModalFormProps {
  title?: string;
  onSubmit: (formData: { title: string; description: string; price: number; discount: number; media: string }) => void;
  isOpen: boolean;
  onClose: () => void;
  productId?: string | null;
}

const UpdateModal: React.FC<ModalFormProps> = ({ title = "Add New Item", onSubmit, isOpen, onClose, productId}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    discount: 0,
    media: "",
  });
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (productId) {
      setIsloading(true); 
      axios.get(`/api/get-product-by-id/${productId}`)
        .then((res) => {
          setFormData({
            title: res.data.title || "",
            description: res.data.description || "",
            price: res.data.price || 0,
            discount: res.data.discount || 0,
            media: res.data.media || "",
          });
        })
        .catch((error) => console.error("Error fetching product:", error))
        .finally(() => setIsloading(false)); 
    } else {
      setFormData({ title: "", description: "", price: 0, discount: 0, media: "" });
    }
  }, [productId, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.put(`/api/product-edit/${productId}`, formData);
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        
        <div className="bg-white w-full max-w-lg mx-auto p-6 rounded-2xl shadow-lg">
        {isLoading ? (
            // ✅ Proper Loader
            <div className="flex justify-center items-center h-20">
              <div className="w-10 h-10 border-4 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="number"
              name="discount"
              placeholder="Discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="url"
              name="media"
              placeholder="Image URL"
              value={formData.media}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button type="submit" disabled={loading} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
                {loading ? "Updating..." : "Update"} 
              </button> 
            </div>
            
          </form>
          </>
            )};
        </div>
      </motion.div>
    )
  
  );
};

export default UpdateModal;