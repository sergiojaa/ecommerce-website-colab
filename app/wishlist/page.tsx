"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

type WishlistItem = {
  id: number;
  product: number;
  product_name: string;
  added_at: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function Wishlist() {
  const [wishlistProducts, setWishlistProducts] = useState<WishlistItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [mergedWishlistItems, setMergedWishlistItems] = useState<
    (WishlistItem & Product)[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  const getWishlistItems = (token: string | null) => {
    if (!token) {
      setError("Token is missing");
      return;
    }
    axios
      .get(`https://geguchadzeadmin.pythonanywhere.com/wishlist/items/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setWishlistProducts(res.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  };

  const getProducts = () => {
    axios
      .get("https://geguchadzeadmin.pythonanywhere.com/products/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getWishlistItems(token);
    getProducts();
  }, []);

  useEffect(() => {
    if (wishlistProducts.length > 0 && products.length > 0) {
      const merged = wishlistProducts
        .map((wishlistItem) => {
          const product = products.find((p) => p.id === wishlistItem.product);
          return product ? { ...wishlistItem, ...product } : null;
        })
        .filter((item): item is WishlistItem & Product => item !== null);
      setMergedWishlistItems(merged);
    }
  }, [wishlistProducts, products]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mergedWishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={160}
              height={160}
              className="object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-red-500 font-bold">${item.price}</p>
            <p className="text-gray-500 text-sm">Added at: {item.added_at}</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              <span role="img" aria-label="cart">
                🛒
              </span>{" "}
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
