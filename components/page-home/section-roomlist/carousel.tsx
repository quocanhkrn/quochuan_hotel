"use client";

import { Room } from "@/lib/types";
import RoomCard from "./room-card";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ roomData }: { roomData: Room[] }) => {
  return (
    <Swiper slidesPerView={"auto"} centeredSlides loop className="mt-5">
      {roomData?.map((room) => (
        <SwiperSlide key={room.id} className="w-fit">
          <RoomCard {...room} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
