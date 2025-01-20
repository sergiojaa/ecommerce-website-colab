"use client";
import DetailedSlider from "@/components/DetailedSlider";
import ProductSlider from "@/components/ProductSlider";
import React from "react";
import useFetchProducts from "@/useFetchProducts";
export default function detailed() {
  const { productData: productData2 } = useFetchProducts(
    "https://geguchadzeadmin.pythonanywhere.com/products/best-sellers/"
  );
  return (
    <>
      <div className="grid grid-cols-12 gap-[70px] max-w-[1170px] mx-auto mb-[140px]">
        <div className="col-span-8 bg-lightblue text-center">
          <DetailedSlider />
        </div>
        <div className="col-span-4 bg-lightblue p-4 text-center">
          {/* Image Section */}

          {/* Details Section */}
          <div className="w-full text-left space-y-4">
            <h1 className="text-2xl font-bold">Product Title</h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>(59 Reviews)</span>
            </div>
            <p className="text-xl font-semibold">$99.99</p>
            <p className="text-gray-600">
              This is a great product that provides excellent value and
              performance. It's perfect for everyday use and comes with a
              variety of features.
            </p>

            {/* Colors */}
            <div>
              <h2 className="text-lg font-medium">Colors:</h2>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full border border-gray-300 bg-white"></div>
                <div className="w-6 h-6 rounded-full border border-gray-300 bg-red-500"></div>
              </div>
            </div>

            {/* Size */}
            <div>
              <h2 className="text-lg font-medium">Size:</h2>
              <div className="flex space-x-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-2 py-1 border border-gray-300 rounded-md"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h2 className="text-lg font-medium">Quantity:</h2>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md">
                  -
                </button>
                <span>1</span>
                <button className="px-3 py-1 border border-gray-300 rounded-md">
                  +
                </button>
              </div>
            </div>

            <button className="w-full py-2 bg-red-500 text-white font-semibold rounded-md">
              Buy Now
            </button>

            {/* Favorite */}
            <button className="w-full py-2 mt-2 font-semibold rounded-md bg-gray-200 text-black">
              Add to Favorites
            </button>

            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span>✅</span>
                <span>Free Delivery</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>🔄</span>
                <span>Free 30 Days Return</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1170px] mx-auto ">
        <ProductSlider rows={1} products={productData2} />
      </div>{" "}
    </>
  );
}
