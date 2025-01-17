"use client";
import React, { useState, useEffect } from "react";
import ProductSlider from "@/components/ProductSlider";
import Service from "@/components/Service";
import TopProducts from "@/components/TopProducts";
import NewArrival from "@/components/NewArrival";
import Boost from "@/components/Boost";
import CategorySlider from "@/components/CategorySlider";
import useFetchProducts from "@/useFetchProducts";

export default function Home() {
  const {
    productData: productData1,
    loading: loading1,
    error: error1,
  } = useFetchProducts(
    "https://geguchadzeadmin.pythonanywhere.com/products/products/"
  );
  const {
    productData: productData2,
    loading: loading2,
    error: error2,
  } = useFetchProducts(
    "https://geguchadzeadmin.pythonanywhere.com/products/best-sellers/"
  );

  const {
    productData: productData3,
    loading: loading3,
    error: error3,
  } = useFetchProducts(
    "https://geguchadzeadmin.pythonanywhere.com/products/best-sellers/"
  );

  if (loading1 || loading2 || loading3) return <div>დატვირთვა...</div>;
  if (error1 || error2 || error3)
    return <div>შეცდომა: {error1 || error2 || error3}</div>;

  return (
    <div style={{ maxWidth: "1170px", margin: "auto", marginTop: "150px" }}>
      <ProductSlider rows={1} products={productData1} />
      <CategorySlider />
      <NewArrival />
      <TopProducts products={productData3} /> {/* Pass productData3 here */}
      <Boost />
      <ProductSlider rows={2} products={productData2} />
      <Service />
    </div>
  );
}
