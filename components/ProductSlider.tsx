"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  name: string;
}

interface ProductSliderProps {
  rows: 1 | 2;
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ rows, products }) => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Refs and effect should be outside any conditional rendering
  const swiperRef = useRef<any>(null);

  // If you're fetching the products, ensure proper handling here
  useEffect(() => {
    setLoading(false);
  }, [products]);

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

  // Check if products are empty or unavailable
  if (loading)
    return <div className="text-center text-gray-700">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!products || products.length === 0)
    return (
      <div className="text-center text-gray-700">No products available</div>
    );

  return (
    <div className="text-center mb-[40px] md:mb-[80px]">
      <div className="flex justify-between items-end mb-[10px] md:mb-[30px]">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-0 md:mb-[24px]">
            <div className="bg-[#DB4444] h-[20px] md:h-[40px] w-[20px] rounded mr-2 md:mr-4"></div>
            <p className="text-[#DB4444] text-base font-semibold">Today’s</p>
          </div>
          <div className="flex items-center">
            <p className="mr-[20px] md:mr-[86px] text-xl font-semibold">
              Flash Sales
            </p>
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
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3, // 640px და პატარა ეკრანებზე 2 სლაიდი გამოჩნდება
          },
          1024: {
            slidesPerView: 4, // 1024px და ზემოთ 4 სლაიდი გამოჩნდება
          },
        }}
        grid={{
          rows: rows,
          fill: "row",
        }}
        modules={[Grid, Navigation]}
        navigation={{
          nextEl: `.custom-next-${rows}`,
          prevEl: `.custom-prev-${rows}`,
        }}
        className="mb-[10px] md:mb-[60px]"
        ref={swiperRef}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="inline-block bg-[#DB4444] py-2 px-[48px] text-3 text-xs font-medium text-white mb-[40px] md:mb-[60px]">
        View All Products
      </p>

      <div className="w-full bg-[#D3D3D3] h-[1px]"></div>
    </div>
  );
};

export default ProductSlider;
