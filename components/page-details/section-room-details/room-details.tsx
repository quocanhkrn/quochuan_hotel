import { fahkwang500 } from "@/components/ui/fonts";
import { Room } from "@/lib/types";
import {
  faBed,
  faExpand,
  faParking,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Price from "./price";
import ImageLibrary from "./image-librabry";

const RoomDetails = ({
  roomData,
}: {
  roomData: Room | undefined;
}): JSX.Element => {
  return (
    <section className="container py-10">
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-5 lg:max-w-screen-lg lg:flex-row">
        <ImageLibrary
          roomName={roomData?.name[1] || ""}
          imagePath={`/images/rooms/${roomData?.id}/${roomData?.id}_cover.jpg`}
        />
        <div className="description flex flex-col gap-8 lg:min-w-fit">
          <div className="room_name">
            <h1
              className={`${fahkwang500.className} text-4xl uppercase text-blue`}
            >
              {roomData?.name[1]}
            </h1>
            <p>{roomData?.name[0]}</p>
          </div>
          <div className="room_description grid grid-cols-2 gap-2 lg:w-fit">
            <p>
              <FontAwesomeIcon
                className="mr-2 inline text-dark-blue"
                icon={faBed}
                width={20}
              />
              {roomData?.bed}
            </p>
            <p>
              <FontAwesomeIcon
                className="mr-2 inline text-dark-blue"
                icon={faExpand}
                width={20}
              />
              Diện tích {roomData?.area}m2
            </p>
            <p>
              <FontAwesomeIcon
                className="mr-2 inline text-dark-blue"
                icon={faWifi}
                width={20}
              />
              Wi-Fi tốc độ cao
            </p>
            <p>
              <FontAwesomeIcon
                className="mr-2 inline text-dark-blue"
                icon={faParking}
                width={20}
              />
              Chỗ đậu xe rộng rãi
            </p>
            <p>
              <FontAwesomeIcon
                className="mr-2 inline text-dark-blue"
                icon={faUtensils}
                width={20}
              />
              Minibar
            </p>
          </div>
          <div className="room_price mt-auto text-center text-dark-blue">
            <Price roomData={roomData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
