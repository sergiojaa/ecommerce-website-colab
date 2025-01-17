"use client"; // აუცილებელია Client Component-ში გამოყენებისთვის

import { useState, useEffect } from "react";

const useFetchProducts = (apiUrl: string) => {
  const [productData, setProductData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [apiUrl]);

  return { productData, loading, error };
};

export default useFetchProducts;
