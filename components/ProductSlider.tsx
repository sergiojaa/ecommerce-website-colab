"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

interface ProductSliderProps {
  rows: 1 | 2;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ rows }) => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  // Create refs for each swiper
  const swiperRef = useRef<any>(null);

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
            className={`custom-prev-${rows} rounded-full p-2 rotate-180 mr-2 ${
              isFirstSlide ? "bg-none" : "bg-[#F5F5F5]"
            }`}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
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
            className={`custom-next-${rows} rounded-full p-2 ${
              isLastSlide ? "bg-none" : "bg-[#F5F5F5]"
            }`}
            onClick={() => swiperRef.current?.swiper.slideNext()}
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
        spaceBetween={30}
        slidesPerView={4}
        grid={{
          rows: rows,
          fill: "row",
        }}
        modules={[Grid, Navigation]}
        navigation={{
          nextEl: `.custom-next-${rows}`,
          prevEl: `.custom-prev-${rows}`,
        }}
        className="mb-[60px]"
        ref={swiperRef}
      >
        {[...Array(30)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="inline-block bg-[#DB4444] py-4 px-[48px] text-3 text-base font-medium text-white mb-[60px]">
        View All Products
      </p>

      <div className="w-full bg-[#D3D3D3] h-[1px]"></div>
    </div>
  );
};

export default ProductSlider;
