"use client";

import React from "react";
import ProductCard from "./ProductCard";

// Define the Color and Size interfaces
interface Color {
  id: number;
  name: string;
}

interface Size {
  id: number;
  name: string;
}

interface AdditionalImages {
  id: number;
  image: string;
}

// Define the Product interface
interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  image: string;
  description: string;
  is_in_stock: boolean;
  color: Color[];
  size: Size[];
  additional_images: AdditionalImages[];
}

interface TopProductsProps {
  products: Product[];
}

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  return (
    <div className="text-center mb-[40px] md:mb-[100px]">
      <div className="flex justify-between items-end mb-[10px] md:mb-[30px]">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center mb-0 md:mb-[24px]">
            <div className="bg-[#DB4444] h-[20px] md:h-[40px] w-[20px] rounded mr-2 md:mr-4"></div>
            <p className="text-[#DB4444] text-base font-semibold">This Month</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="mr-[20px] md:mr-[86px] text-xl font-semibold">
              Best Selling Products
            </p>
            <p className="inline-block bg-[#DB4444] py-2 px-[48px] text-3 text-xs font-medium text-white">
              View All
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
