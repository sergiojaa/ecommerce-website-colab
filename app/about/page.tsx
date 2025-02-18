"use client";
import Image from "next/image";
import { useState } from "react";
export default function About() {
  const [activeDiv, setActiveDiv] = useState<number>(0);
  const handleClick = (index: number) => {
    setActiveDiv(index);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between mx-auto items-center max-w-[1280px] px-4 mt-[80px]">
        <div className="lg:w-[50%] w-full flex flex-col gap-8 lg:gap-16 text-center lg:text-left">
          <h1 className="text-[36px] lg:text-[54px] font-bold">Our Story</h1>
          <p className="text-[14px] lg:text-[16px]">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-[14px] lg:text-[16px]">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer goods to various services.
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src="/about.png"
            width={705}
            height={600}
            alt="showing picture"
            className="w-full lg:w-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-20 px-4">
        {[
          "/Services.png",
          "/services2.png",
          "/Services-copy2.png",
          "/Services-copy3.png",
        ].map((src, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`border cursor-pointer justify-center gap-3 flex flex-col items-center h-[200px] w-[200px] sm:w-[230px] border-black ${
              activeDiv === index ? "bg-red-500" : ""
            }`}
          >
            <Image src={src} width={50} height={50} alt="image" />
            <p className="text-[24px] sm:text-[32px] font-bold">
              {["10.5k", "33k", "45.5k", "25k"][index]}
            </p>
            <p className="text-center text-[14px] sm:text-[16px]">
              {
                [
                  "Sellers active on our site",
                  "Monthly Product Sale",
                  "Customer active on our site",
                  "Annual gross sale on our site",
                ][index]
              }
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-20 px-4">
        {["/man-2.png", "/woman.png", "/man-2.png"].map((src, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 max-w-xs text-center"
          >
            <Image
              className="bg-[#F5F5F5] w-[200px] sm:w-[250px]"
              src={src}
              width={250}
              height={100}
              alt="person image"
            />
            <h2 className="text-[24px] sm:text-[32px]">Tom Cruise</h2>
            <p>Founder & Chairman</p>
            <div className="flex gap-3 mt-2 items-center">
              {[
                "/Icon-Twitter.png",
                "/Icon-instagram.png",
                "/Icon-Linkedin.png",
              ].map((icon, i) => (
                <Image
                  key={i}
                  className="cursor-pointer"
                  src={icon}
                  height={20}
                  width={20}
                  alt="social icon"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-12 mt-10 mb-20 px-4">
        {["/servic.png", "/serv.png", "/ser.png"].map((src, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 items-center text-center w-[250px]"
          >
            <Image src={src} width={60} height={30} alt="services-icon" />
            <h2 className="text-[18px] sm:text-[20px] mt-4">
              {
                [
                  "FREE AND FAST DELIVERY",
                  "24/7 CUSTOMER SERVICE",
                  "MONEY BACK GUARANTEE",
                ][index]
              }
            </h2>
            <p className="text-[12px]">
              {
                [
                  "Free delivery for all orders over $140",
                  "Friendly 24/7 customer support",
                  "We return money within 30 days",
                ][index]
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
