"use client";

import Title from "./title";
import { useEffect, useState } from "react";
import { getAllImages } from "../../../lib/apis";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Events = (): JSX.Element => {
  const [imagePaths, setImagePaths] = useState<string[] | undefined>();

  useEffect(() => {
    const getImagePaths = async (): Promise<void> => {
      getAllImages("events").then((res: string[]) => setImagePaths(res));
    };
    getImagePaths();
  }, []);

  return (
    <section className="py-16">
      <Title />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop
        speed={2000}
        autoplay={{ delay: 1000 }}
        className="mt-5 h-96"
      >
        {imagePaths?.map((image) => (
          <SwiperSlide key={image} className="relative w-fit">
            <Image
              className="relative"
              src={`/images/events/${image}`}
              alt={image}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;
