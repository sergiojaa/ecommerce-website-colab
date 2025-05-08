import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper"; // Import the Swiper type

const DetailedSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null); // Specify the correct type here

  return (
    <>
      <div className="grid grid-cols-8 gap-[30px]">
        <div className="col-span-2 bg-lightblue text-center">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            direction="vertical"
            className="mySwiper detailed-swiper overflow-hidden"
            style={{ maxHeight: "560px" }}
          >
            {/* Add SwiperSlide components here */}
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            {/* You can add more slides as needed */}
          </Swiper>
        </div>

        <div className="col-span-6 bg-lightblue text-center">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {/* Add SwiperSlide components here */}
            <SwiperSlide>Content 1</SwiperSlide>
            <SwiperSlide>Content 2</SwiperSlide>
            <SwiperSlide>Content 3</SwiperSlide>
            <SwiperSlide>Content 4</SwiperSlide>
            {/* You can add more slides as needed */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DetailedSlider;
