"use client";

import Image from "next/image";
import classname from "./resort.module.css";
import { fahkwang500 } from "@/components/ui/fonts";
import cover from "@/public/images/resort/cover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Resort = (): JSX.Element => {
  return (
    <section
      className={`${classname.resort} relative text-white before:bg-dark-blue before:bg-opacity-60 md:before:bg-opacity-0`}
    >
      <div className="p-16">
        <h1 className={`${fahkwang500.className} text-[1rem]`}>SẮP RA MẮT</h1>
        <h1 className={`${fahkwang500.className} text-[2rem] text-yellow`}>
          K62 PRAIRIE RESORT
        </h1>
        <p>
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          Buôn K62, Xã Đắk Drô, H. Krông Nô, Đắk Nông
        </p>
        <p className="mt-5 leading-6 md:w-3/4 xl:w-1/2">
          Khu nghỉ dưỡng 5 sao tọa lạc gần trung tâm thị trấn, mang đến một
          không gian yên bình và tiện nghi đẳng cấp. Với thiết kế kiến trúc sang
          trọng và hiện đại, khu nghỉ dưỡng này tự hào cung cấp các phòng nghỉ
          rộng rãi, tiện nghi cùng dịch vụ chu đáo. Vị trí thuận lợi cho phép du
          khách dễ dàng khám phá các điểm tham quan nổi bật và trải nghiệm văn
          hóa địa phương.
        </p>
      </div>
      <Image
        className="absolute -z-10 object-cover"
        src={cover}
        alt="K62 Resort"
        quality={100}
        fill
      />
    </section>
  );
};

export default Resort;
