"use client"; // კომპონენტი, რომელიც შესრულდება მხოლოდ კლიენტზე

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function TopProducts() {
  const [posts, setPosts] = useState<any[]>([]); // ინახავს გადმოწეულ მონაცემებს
  const [loading, setLoading] = useState(true); // დატვირთვის მდგომარეობა
  const [error, setError] = useState<string | null>(null); // შეცდომის მდგომარეობა

  useEffect(() => {
    // მონაცემების ასინქრონულად წამოსაღებად ფუნქცია
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geguchadzeadmin.pythonanywhere.com/products/products/"
        );
        if (!response.ok) {
          throw new Error("API გადახდა!");
        }
        const data = await response.json();
        setPosts(data); // ასახავს მიღებულ მონაცემებს
      } catch (error: any) {
        setError(error.message); // შეცდომის შეტყობინება
      } finally {
        setLoading(false); // დატვირთვა დასრულებულია
      }
    };

    fetchData(); // მონაცემების წამოსაღებად
  }, []); // გამოძახება კომპონენტის დატვირთვისას

  // დატვირთვისა და შეცდომის შეტყობინების დამუშავება
  if (loading) {
    return <div>დატვირთვა...</div>;
  }

  if (error) {
    return <div>შეცდომა: {error}</div>;
  }

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
        {posts.slice(0, 4).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
