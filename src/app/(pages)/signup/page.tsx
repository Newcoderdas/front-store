"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { LogIn, User, Mail, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
    const [name, setName] = useState("");
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
        const res = await fetch("/api/auth/user-register", {
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
  
        setMessage("Account created successfully!");

        setTimeout(() => {
            router.push("/login"); 
          }, 2000);
  
      } catch (error: any) {
        setMessage(error.message || "Something went wrong!");
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
        <h2 className="mb-4 text-4xl font-semibold">Create an account</h2>
        <p className="mb-8">Enter your details below</p>

        {message && <p className="text-red-500 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center border-b border-black px-3 py-2">

            <User className="mr-2" size={20} />
            <input type="text"
             name="name"
             value={name} 
             placeholder="Name" 
             onChange={(e)=>setName(e.target.value)} 
             required 
             className='border-none focus:outline-none w-full' />
          </div>

          <div className="flex items-center border-b border-black px-3 py-2">
            <Mail className="mr-2" size={20} />
            <input type="email" 
            name="email" 
            value={email}
            placeholder="Email or Phone Number" 
            onChange={(e)=>setEmail(e.target.value)}
            required 
            className='border-none focus:outline-none w-full'/>
          </div>

          <div className="flex items-center border-b border-black px-3 py-2">
            <Lock className="mr-2" size={20} />
            <input type="password" 
            name="password" 
            value={password}
            placeholder="Password" 
            onChange={(e)=>setPassword(e.target.value)} 
            required 
            className='border-none focus:outline-none w-full'/>
          </div>
          <Button type="submit" className="w-full py-1 rounded-sm bg-red-500 hover:bg-red-600">
          {loading ? "Creating Account..." : "Create Account"}
            </Button>
        </form>
        <div className="my-4 text-center text-gray-500">or</div>
        <Button className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 hover:bg-gray-100">
          <LogIn className="mr-2" size={20} /> Sign up with Google
        </Button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link>
        </p>
      </div>
        </div>

     </div>
    </>
  )
}


export default page
