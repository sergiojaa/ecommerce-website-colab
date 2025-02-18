import React from "react";
import Image from "next/image";
import ServiceFrameImage from "../images/Frame694.png";
import CountdownTimer from "./CountDownTimer";
export default function Boost() {
  return (
    <div className="flex justify-between items-stretch flex-col md:flex-row  gap-[30px] w-full p-[16px] md:p-[56px] bg-black mb-[70px] ">
      <div className="flex flex-col justify-center items-start">
        <p className="text-[#47B486] text-base font-semibold mb-[16px] md:mb-[32px]">
          Categories
        </p>
        <p className="text-white text-[24px] md:text-[48px] font-semibold mb-[16px] md:mb-[32px]">
          Enhance Your Music Experience
        </p>
        <CountdownTimer />
        <button className="bg-[#00FF66] text-white py-[16px] px-[48px] rounded mt-[40px] text-base font-semibold ">
          Buy Now!
        </button>
      </div>
      <Image
        src={ServiceFrameImage}
        alt="logo"
        className="object-contain w-full h-auto"
      />
    </div>
  );
}
