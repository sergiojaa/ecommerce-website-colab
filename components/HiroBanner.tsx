import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function HiroBanner() {
  const [images, setImages] = useState<string[]>([]);

  // Get images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://geguchadzeadmin.pythonanywhere.com/products/image-sliders/"
        );
        const data = await response.json();
        setImages(data.map((item: { image: string }) => item.image)); // Assuming 'image' key contains the image URL
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper max-h-[344px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
