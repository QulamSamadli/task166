import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <Swiper className="mySwiper ">
      <SwiperSlide className="bg-quizbg bg-cover  bg-center text-white h-[600px]">
        <div className="container flex flex-col gap-11 h-[300px] justify-center my-12 ">
          <h2 className="font-bold text-[48px]">İmtahanlar</h2>
          <p className="max-w-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-quizbg bg-cover  bg-center text-white h-[600px]">
        <div className="container flex flex-col gap-11 h-[300px] justify-center my-12 ">
          <h2 className="font-bold text-[48px]">İmtahanlar</h2>
          <p className="max-w-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-quizbg bg-cover  bg-center text-white h-[600px]">
        <div className="container flex flex-col gap-11 h-[300px] justify-center my-12 ">
          <h2 className="font-bold text-[48px]">İmtahanlar</h2>
          <p className="max-w-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
