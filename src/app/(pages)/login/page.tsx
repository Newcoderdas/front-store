"use client"
import { Button} from 'flowbite-react';
import { Mail, Lock } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/user-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("token", data.token); 

      setMessage("Login successful! Redirecting...");
      
      setTimeout(() => {
        router.push("/home"); 
      }, 2000); 

    } catch (error: any) {
      setMessage(error.message || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <div className='grid grid-col-1 lg:grid-cols-12 md:grid-cols-10 items-center mt-28 max-w-[92rem] mx-auto'>

        <div className="hidden md:block lg:col-span-7 md:col-span-5">
            <div className="max-w-full object-cover flex justify-center">
            <Image 
              src="/auth.png" 
              alt="Loading..."
              width={800}                
              height={800} 
              />
            </div>
        </div>

        <div className="justify-items-center col-span-1 lg:col-span-5 md:col-span-5">
        <div className="w-full max-w-md p-12">
        <h2 className="mb-4 text-4xl font-semibold">Log in to Front-Store</h2>
        <p className="mb-8">Enter your details below</p>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-8">
         
          <div className="flex items-center border-b border-black px-3 py-2">
            <Mail className="mr-2" size={20} />
            <input type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email or Phone Number"
            required 
            className='border-none focus:outline-none w-full'/>
          </div>
          <div className="flex items-center border-b border-black px-3 py-2">
            <Lock className="mr-2" size={20} />
            <input type="password" 
            name="password"
            value={password}
            placeholder="Password" 
            required 
            onChange={(e) => setPassword(e.target.value)}
            className='border-none focus:outline-none w-full'/>
          </div>
          <div className='flex justify-between'>
          <Button type="submit" className=" py-1 px-5 rounded-sm bg-red-500 hover:bg-red-600">
          {loading ? "Logging in..." : "Log in"}
          </Button>
          <Button type="submit" className=" py-1  rounded-sm text-red-500 hover:text-red-700 border-none">Forgot Password?</Button>
          </div>
        </form>
      </div>
        </div>

     </div>
    </>
  )
}


export default page
