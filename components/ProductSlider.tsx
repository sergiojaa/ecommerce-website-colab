"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

const ProductSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
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
  );
};

export default ProductSlider;
