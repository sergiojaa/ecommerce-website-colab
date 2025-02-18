import React from "react";
import Image from "next/image";
import ServiceImage from "../images/Services.png";
import ServiceSecImage from "../images/Services-2.png";
import ServiceThrdImage from "../images/Services-3.png";

export default function Service() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[88px] gap-y-[20px] md:gap-y-0 mb-[60px] md:mb-[140px]">
      <div className="flex flex-col	 items-center justify-center">
        <Image
          src={ServiceImage}
          alt="Service Image"
          width={80}
          height={80}
          className="mb-[24px]"
        />
        <p className="text-xl font-semibold mb-[8px]">FREE AND FAST DELIVERY</p>
        <p className="text-sm font-normal">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="flex flex-col	 items-center justify-center">
        <Image
          src={ServiceSecImage}
          alt="Service Image"
          width={80}
          height={80}
          className="mb-[24px]"
        />
        <p className="text-xl font-semibold mb-[8px]">24/7 CUSTOMER SERVICE </p>
        <p className="text-sm font-normal">Friendly 24/7 customer support </p>
      </div>{" "}
      <div className="flex flex-col	 items-center justify-center">
        <Image
          src={ServiceThrdImage}
          alt="Service Image"
          width={80}
          height={80}
          className="mb-[24px]"
        />
        <p className="text-xl font-semibold mb-[8px]">MONEY BACK GUARANTEE </p>
        <p className="text-sm font-normal">We reurn money within 30 days </p>
      </div>
    </div>
  );
}
