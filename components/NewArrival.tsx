// "use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import FrameImage from "../public/Frame706.png"; // Correct path
import FrameTwoImage from "../public/Frame707.png"; // Correct path
import FrameThreeImage from "../public/Frame708.png"; // Correct path
import FrameFourImage from "../public/Frame709.png"; // Correct path

export default function NewArrival() {
  return (
    <div>
      <div className="flex flex-col items-start mb-[60px]">
        <div className="flex items-center mb-[24px]">
          <div className="bg-[#DB4444] h-[40px] w-[20px] rounded mr-4"></div>
          <p className="text-[#DB4444] text-base font-semibold">Featured</p>
        </div>
        <div className="flex justify-between items-end w-full">
          <p className="mr-[86px] text-4xl font-semibold">New Arrival</p>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-[30px] mb-[140px]">
        <div className="row-span-2 bg-black relative flex justify-center items-end">
          <Image
            src={FrameFourImage}
            alt="PlayStation 5"
            className="object-cover"
          />
          <div className="absolute left-[32px] bottom-[32px]">
            <p className="text-white text-2xl font-semibold mb-[16px]">
              PlayStation 5
            </p>
            <p className="text-white text-sm font-normal mb-[16px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a className="text-base text-white font-medium" href="">
              Shop Now
            </a>
          </div>{" "}
        </div>

        <div className="col-span-2 text-left bg-black flex justify-end relative">
          <Image
            src={FrameThreeImage}
            alt="PlayStation 5"
            className="object-cover"
          />
          <div className="absolute left-[32px] bottom-[32px]">
            <p className="text-white text-2xl font-semibold mb-[16px]">
              Women’s Collections{" "}
            </p>
            <p className="text-white text-sm font-normal mb-[16px]">
              Featured woman collections that give you another vibe.{" "}
            </p>
            <a className="text-base text-white font-medium" href="">
              Shop Now
            </a>
          </div>{" "}
        </div>

        <div className="grid grid-cols-2 gap-[30px] col-span-2">
          <div className="flex items-center bg-black w-full relative">
            {" "}
            <Image
              src={FrameTwoImage} // Use the variable directly without quotes
              alt="PlayStation 5"
              // layout="fill" // This makes the image cover the area like background
              // objectFit="cover" // This helps maintain the aspect ratio while covering the area
              className="bg-cover bg-cente m-auto" // Optional, styling classes
            />
            <div className="absolute left-[32px] bottom-[32px]">
              <p className="text-white text-2xl font-semibold mb-[16px]">
                Speakers{" "}
              </p>
              <p className="text-white text-sm font-normal mb-[16px]">
                Amazon wireless speakers{" "}
              </p>
              <a className="text-base text-white font-medium" href="">
                Shop Now
              </a>
            </div>{" "}
          </div>
          <div className="flex items-center bg-black w-full relative">
            {" "}
            <Image
              src={FrameImage} // Use the variable directly without quotes
              alt="PlayStation 5"
              // layout="fill" // This makes the image cover the area like background
              // objectFit="cover" // This helps maintain the aspect ratio while covering the area
              className="bg-cover bg-center m-auto" // Optional, styling classes
            />
            <div className="absolute left-[32px] bottom-[32px]">
              <p className="text-white text-2xl font-semibold mb-[16px]">
                Perfume{" "}
              </p>
              <p className="text-white text-sm font-normal mb-[16px]">
                GUCCI INTENSE OUD EDP{" "}
              </p>
              <a className="text-base text-white font-medium" href="">
                Shop Now
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
