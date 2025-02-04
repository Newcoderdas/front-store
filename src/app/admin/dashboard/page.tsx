"use client";
import React, { useState } from "react";
import axios from "axios";
import { Label, Textarea, TextInput, Button } from "flowbite-react";

const Page = () => {
  const [sendProduct, setSendProduct] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    media: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSendProduct({ ...sendProduct, [e.target.name]: e.target.value });
  };

  // Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", sendProduct.title);
    formData.append("description", sendProduct.description);
    formData.append("price", sendProduct.price);
    formData.append("discount", sendProduct.discount);
    formData.append("media", sendProduct.media);

    try {
      const response = await axios.post("/api/addproduct", {
        ...formData,
        price: Number(formData.price), // Ensure price is a number
        discount: Number(formData.discount),
    
      });
      setMessage(response.data.message);
      console.log(response.data)
      setSendProduct({ title: "", description: "", price: "", discount: "", media: "" }); // Reset form
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 flex flex-col mx-auto max-w-sm lg:max-w-md">
      <h1 className="text-lg lg:text-4xl md:text-2xl font-bold">Add Products</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label className="text-xs md:text-md font-bold" value="Product Title:" />
          <TextInput name="title" placeholder="Title" required value={sendProduct.title} onChange={handleChange} className="border rounded-md border-black" />
        </div>

        <div>
          <Label className="text-xs md:text-md font-bold" value="Description:" />
          <Textarea name="description" placeholder="Product Description" required rows={4} value={sendProduct.description} onChange={handleChange} className="border rounded-md border-black" />
        </div>

        <div>
          <Label className="text-xs md:text-md font-bold" value="Product Price:" />
          <TextInput type="number" name="price" placeholder="Set Price" required value={sendProduct.price} onChange={handleChange} className="border rounded-md border-black" />
        </div>

        <div>
          <Label className="text-xs md:text-md font-bold" value="Product Discount:" />
          <TextInput type="number" name="discount" placeholder="Set Discount" required value={sendProduct.discount} onChange={handleChange} className="border rounded-md border-black" />
        </div>

        <div>
          <Label className="text-xs md:text-md font-bold" value="Product Image URL:" />
          <TextInput name="media" placeholder="URL" required value={sendProduct.media} onChange={handleChange} className="border rounded-md border-black" />
        </div>

        <Button type="submit" className="bg-gray-400 text-black w-full mt-4 hover:bg-gray-500" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>

        {message && <p className="mt-3 text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default Page;
