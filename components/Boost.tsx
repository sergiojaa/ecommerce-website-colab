import React from "react";
import Image from "next/image";
import ServiceFrameImage from "../images/Frame694.png";

export default function Boost() {
  return (
    <div className="flex justify-between items-stretch w-full p-4 bg-black mb-[70px] min-h-screen">
      <div className="flex flex-col justify-between flex-1">
        <p className="text-white">Categories</p>
        <p className="text-white">Enhance Your Music Experience</p>
        <p className="text-white">24:24</p>
        <button className="text-white">Buy Now!</button>
      </div>
      <div className="flex-1">
        <Image
          src={ServiceFrameImage}
          alt="logo"
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}
