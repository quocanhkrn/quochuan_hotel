import Image from "next/image";
import { fahkwang500 } from "@/components/ui/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faExpand,
  faParking,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button from "@/components/ui/button/button";
import { Room } from "@/lib/types";

const RoomCard = ({ id, area, bed, cover, name, price }: Room): JSX.Element => {
  return (
    <div className="mx-5 flex max-w-screen-sm flex-col bg-white text-dark-blue xl:max-w-screen-lg xl:flex-row">
      <div className="relative aspect-video flex-grow lg:min-w-[500px]">
        <Image
          className="object-cover"
          src={`/images/rooms/${id}/${id}_cover.jpg`}
          alt={name[1]}
          quality={50}
          priority
          fill
        />
      </div>
      <div className="container w-fit px-10 py-7 xl:flex xl:flex-col">
        <h1 className={`${fahkwang500.className} text-2xl uppercase text-blue`}>
          {name[1]}
        </h1>
        <p>{name[0]}</p>
        <div className="details mx-auto my-7 grid grid-cols-2 gap-2">
          <p>
            <FontAwesomeIcon className="mr-2 inline" icon={faBed} width={20} />
            {bed}
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faExpand}
              width={20}
            />
            Diện tích {area}m2
          </p>
          <p>
            <FontAwesomeIcon className="mr-2 inline" icon={faWifi} width={20} />
            Wi-Fi tốc độ cao
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faParking}
              width={20}
            />
            Chỗ đậu xe rộng rãi
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faUtensils}
              width={20}
            />
            Minibar
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row xl:mt-auto xl:flex-col">
          <div className="text-center text-dark-blue">
            <h1
              className={`${fahkwang500.className} whitespace-nowrap text-2xl`}
            >
              {price.night.toLocaleString("en-US")} VNĐ/đêm
            </h1>
            <p className="text-sm italic">
              *Giá trên chưa bao gồm VAT và phụ thu
            </p>
          </div>
          <Button className="border-dark-blue bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue">
            <Link
              href={`/details/${name[1].toLowerCase().split(" ").join("_")}`}
            >
              Xem chi tiết
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
