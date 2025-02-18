"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image"; // იმპორტი

interface Subcategory {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
  colour: string;
  created_at: string;
  description: string;
  discount: number;
  final_price: string;
  image: string;
  is_active: boolean;
  is_in_stock: boolean;
  price: string;
  size: string[]; // specify the type of elements in the size array
  stock: number;
  subcategory: Subcategory | null; // specify the Subcategory type or null
}

export default function Page() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    const token = localStorage.getItem("token");
    setLoading(true);

    axios
      .get(
        `https://geguchadzeadmin.pythonanywhere.com/products/products/${id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <div
        key={product.id}
        className="flex flex-col mb-4 border border-gray-300 p-4 rounded shadow-md"
      >
        <p className="bg-red-100 w-[300px] p-2 font-semibold">{product.name}</p>
        <p className="bg-red-500 w-[500px] p-2 text-white">
          {product.description}
        </p>
        <div className="bg-yellow-500 w-[500px] h-[300px] overflow-hidden flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500} // გთხოვთ, დააყენოთ ზომები
            height={300} // გთხოვთ, დააყენოთ ზომები
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="bg-red-900 text-white text-lg font-bold p-2">
          {product.price}usd
        </h2>
      </div>
    </div>
  );
}
