"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
// import { useState } from "react";

const ProductSlider = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper: any) => {
    if (swiper.isEnd) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }

    if (swiper.isBeginning) {
      setIsFirstSlide(true);
    } else {
      setIsFirstSlide(false);
    }
  };
  return (
    <div className="text-center mb-[80px]">
      <div className="flex justify-between items-end mb-[30px]">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-[24px]">
            <div className="bg-[#DB4444] h-[40px] w-[20px] rounded mr-4"></div>
            <p className="text-[#DB4444] text-base font-semibold">Today’s</p>
          </div>
          <div className="flex items-center">
            <p className="mr-[86px] text-4xl font-semibold">Flash Sales</p>
            <p>22:22:22</p>
          </div>
        </div>
        <div>
          <button
            className={`custom-prev rounded-full p-2 rotate-180 mr-2 ${
              isFirstSlide ? "bg-none" : "bg-[#F5F5F5]"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`custom-next  rounded-full p-2 ${
              isLastSlide ? "bg-none" : "bg-[#F5F5F5]"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 12H20M20 12L13 5M20 12L13 19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        style={{ marginBottom: "60px" }}
        spaceBetween={30}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
      <p className="inline-block bg-[#DB4444] py-4 px-[48px] text-3 text-base font-medium text-white mb-[60px]">
        View All Products
      </p>

      <div className="w-full bg-[#D3D3D3] h-[1px]"></div>
    </div>
  );
};

export default ProductSlider;
