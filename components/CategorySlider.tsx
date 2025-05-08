"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FetchCategories from "@/FetchCategories";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { Swiper as SwiperType } from "swiper"; // Import Swiper type from swiper module
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Import required modules
import { FreeMode } from "swiper/modules";

// Define the SwiperRef type
interface SwiperRef {
  swiper: SwiperType;
}

export default function CategorySlider() {
  const { productData, loading, error } = FetchCategories();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  // Update to use the correct type for swiper
  const handleSlideChange = (swiper: SwiperType) => {
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

  // Use proper type for swiperRef
  const swiperRef = useRef<SwiperRef | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="flex flex-col items-start mb-[10px] md:mb-[30px]">
        <div className="flex items-center mb-0 md:mb-[24px]">
          <div className="bg-[#DB4444] h-[20px] md:h-[40px] w-[20px] rounded mr-2 md:mr-4"></div>
          <p className="text-[#DB4444] text-base font-semibold">Categories</p>
        </div>
        <div className="flex justify-between items-end w-full">
          <p className="mr-[20px] md:mr-[86px] text-xl font-semibold">
            Browse By Category
          </p>
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
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
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
        {productData.map((subcategory, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center p-2"
          >
            <div className="border border-[#0000004D] p-[10px] md:p-[24px] rounded-lg shadow-md w-full text-center">
              {subcategory.category.imageUrl ? (
                <Image
                  src={subcategory.category.imageUrl}
                  alt={subcategory.sub_name}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div></div>
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {subcategory.sub_name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full bg-[#D3D3D3] h-[1px] my-[20px] md:my-[70px]"></div>
    </>
  );
}
