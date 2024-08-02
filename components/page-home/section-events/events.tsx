"use client";

import Title from "./title";
import Slider, { Settings } from "react-slick";
import { useEffect, useState } from "react";
import { getAllImages } from "../../../lib/apis";

const Events = () => {
  const settings: Settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    speed: 2000,
    adaptiveHeight: true,
  };

  const [imagePaths, setImagePaths] = useState<string[] | undefined>();

  useEffect(() => {
    const getImagePaths = async () => {
      getAllImages("events").then((res) => setImagePaths(res));
    };
    getImagePaths();
  }, []);

  return (
    <section className="py-16">
      <Title />
      <Slider {...settings} className="mt-10">
        {imagePaths?.map((image) => (
          <div key={image} className="mx-2 h-96">
            <img
              className="h-full object-contain"
              src={`/images/events/${image}`}
              alt={image}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Events;
