"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FetchCategories from "@/FetchCategories";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Import required modules
import { FreeMode } from "swiper/modules";

export default function CategorySlider() {
  const { productData, loading, error } = FetchCategories(); // Use FetchCategories to get data
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
  const swiperRef = useRef<any>(null);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <>
      <div className="flex flex-col items-start mb-[60px]">
        <div className="flex items-center mb-[24px]">
          <div className="bg-[#DB4444] h-[40px] w-[20px] rounded mr-4"></div>
          <p className="text-[#DB4444] text-base font-semibold">Categories</p>
        </div>
        <div className="flex justify-between items-end w-full">
          <p className="mr-[86px] text-4xl font-semibold">Browse By Category</p>
          <div>
            <button
              className={`custom-prev rounded-full p-2 rotate-180 mr-2 ${
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
              className={`custom-next rounded-full p-2 ${
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
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          nextEl: `.custom-next`,
          prevEl: `.custom-prev`,
        }}
        ref={swiperRef}
        className="mySwiper"
      >
        {/* Dynamic rendering of SwiperSlide using the fetched data */}
        {productData.map((subcategory, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center p-2"
          >
            <div className="border border-[#0000004D] p-[24px] rounded-lg shadow-md w-full text-center">
              {/* Display category name and subcategory name */}
              {subcategory.category.imageUrl ? (
                <img
                  src={subcategory.category.imageUrl} // ან სწორი სტრუქტურის მიხედვით
                  alt={subcategory.sub_name}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div>No image available</div> // თუ სურათი არ არის
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {subcategory.sub_name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full bg-[#D3D3D3] h-[1px] my-[70px]"></div>
    </>
  );
}
