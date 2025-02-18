"use client";
import React from "react";
import ProductSlider from "@/components/ProductSlider";
import Service from "@/components/Service";
import TopProducts from "@/components/TopProducts";
import NewArrival from "@/components/NewArrival";
import Boost from "@/components/Boost";
import CategorySlider from "@/components/CategorySlider";
import useFetchProducts from "@/useFetchProducts";
import HiroBanner from "@/components/HiroBanner";
import CategoriesComponent from "@/components/CategoriesComponent";
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

  if (loading1 || loading2 || loading3)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
      </div>
    );
  if (error1 || error2 || error3)
    return <div>შეცდომა: {error1 || error2 || error3}</div>;

  return (
    <div style={{ maxWidth: "1170px", margin: "auto" }}>
      <div className="md:grid grid-cols-12 gap-0 md:gap-[45px] mb-[20px] md:mb-[100px] flex flex-col md:flex-row">
        <div className="col-span-3 border-r border-[#D3D3D3] pt-[20px] md:pt-[40px] overflow-x-scroll">
          <CategoriesComponent />
        </div>
        <div className="col-span-9 pt-[10px] md:pt-[40px]">
          <HiroBanner />
        </div>
      </div>
      <ProductSlider rows={1} products={productData1} />
      <CategorySlider />
      <TopProducts products={productData3} /> {/* Pass productData3 here */}
      <Boost />
      <ProductSlider rows={2} products={productData2} />
      <NewArrival />
      <Service />
    </div>
  );
}
