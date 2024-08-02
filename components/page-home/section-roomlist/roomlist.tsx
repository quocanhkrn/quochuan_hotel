"use client";

import RoomCard from "./room";
import Title from "./title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useEffect, useState } from "react";
import { getRoomData } from "@/lib/apis";
import { Room } from "@/lib/types";

const RoomList = () => {
  const [roomData, setRoomData] = useState<Room[] | null>(null);

  const settings: Settings = {
    adaptiveHeight: true,
    speed: 1000,
    variableWidth: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchRoomData = async () => {
      return await getRoomData()
        .then((res) => setRoomData(res))
        .catch((err) => {
          throw err;
        });
    };
    fetchRoomData();
  }, []);

  return (
    <section className="bg-dark-blue py-16 text-white">
      <Title />
      <Slider {...settings} className="mt-10">
        {roomData &&
          roomData?.map((room) => <RoomCard key={room.name[1]} {...room} />)}
      </Slider>
    </section>
  );
};

export default RoomList;
