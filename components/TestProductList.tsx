"use client";
import React, { useEffect, useState } from "react";
import TestProductCard from "./TestProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const TestProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // პროდუქტის მონაცემები
  const [loading, setLoading] = useState<boolean>(true); // დატვირთვის სტატუსი
  const [error, setError] = useState<string | null>(null); // შეცდომა

  useEffect(() => {
    // API ზარი
    fetch("https://fakestoreapi.com/products") // ანალოგიური რეალური API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); // პროდუქტის მონაცემების განახლება
        setLoading(false); // დატვირთვა დასრულებულია
      })
      .catch((error) => {
        setError(error.message); // შეცდომა
        setLoading(false);
      });
  }, []); // ცალკე ზარი მხოლოდ კომპონენტის დამონტაჟების დროს

  if (loading)
    return <div className="text-center text-gray-700">Loading...</div>; // დატვირთვის დროს
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>; // შეცდომის შემთხვევაში

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <TestProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default TestProductList;
