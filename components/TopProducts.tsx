import React from "react";
import ProductCard from "./ProductCard";
export default function TopProducts() {
  return (
    <div className="text-center mb-[140px]">
      <div className="flex justify-between items-end mb-[30px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center mb-[24px]">
            <div className="bg-[#DB4444] h-[40px] w-[20px] rounded mr-4"></div>
            <p className="text-[#DB4444] text-base font-semibold">This Month</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="mr-[86px] text-4xl font-semibold">
              Best Selling Products{" "}
            </p>
            <p className="inline-block bg-[#DB4444] py-4 px-[48px] text-3 text-base font-medium text-white">
              View All
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
