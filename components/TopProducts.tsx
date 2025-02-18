"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function TopProducts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geguchadzeadmin.pythonanywhere.com/products/products/"
        );
        if (!response.ok) {
          throw new Error("API გადახდა!");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>დატვირთვა...</div>;
  }

  if (error) {
    return <div>შეცდომა: {error}</div>;
  }

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
        {posts.slice(0, 4).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
