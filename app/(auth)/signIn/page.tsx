'use client'
import Image from 'next/image'
import Link from 'next/link';
export default function SigiIn() {
  return (
<div className="flex mt-10 w-[1300px] mx-auto">
  {/* Left-side Image */}
  <div className="flex flex-1 items-start justify-start">
    <Image src="/signUp.png" width={690} height={81} alt="logo" />
  </div>

  {/* Right-side Form */}
  <div className="flex flex-1 justify-center items-center">
    <div className="  w-full max-w-md">
      <div className="flex flex-col gap-1">
        <h1 className="text-[36px]">Log in to EXCLUSIVE</h1>
        <h3 className="text-[16px]">Enter your details below</h3>
      </div>
      <form className="flex flex-col gap-10 mt-7">
      
        <input
          placeholder="Email or Phone Number"
          className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
          type="text"
        />
        <input
          placeholder="Password"
          className="border-b-2 border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
          type="password"
        />
        <div className="flex  items-center justify-between gap-4">
          <button className="bg-[#DB4444] text-white rounded-sm max-w-max text-center px-10 py-3  ">
            Log In
          </button>
          <p className='text-[#DB4444] cursor-pointer'>forget password?</p>
         
        </div>
      </form>
    
    </div>
  </div>
</div>

  );
}
