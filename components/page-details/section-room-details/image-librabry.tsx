"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageLibrary = ({
  roomName,
  imagePath,
}: {
  roomName: string;
  imagePath: string;
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      speed={1500}
      autoplay={{ delay: 3000 }}
      pagination={{
        renderBullet: (index: number, className: string): string => {
          return `<span class="${className} mb-2 bg-white"></span>`;
        },
      }}
      navigation={true}
      className="aspect-video w-full lg:grow"
    >
      <SwiperSlide>
        <Image src={imagePath} alt={roomName} fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imagePath} alt={roomName} fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imagePath} alt={roomName} fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imagePath} alt={roomName} fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={imagePath} alt={roomName} fill />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageLibrary;
