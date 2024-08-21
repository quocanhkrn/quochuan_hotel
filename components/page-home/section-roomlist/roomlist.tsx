import { getAllRoomData } from "@/lib/apis";
import Title from "./title";
import Carousel from "./carousel";
import { Room } from "@/lib/types";

const RoomList = async (): Promise<JSX.Element> => {
  const roomData: Room[] = await getAllRoomData();

  return (
    <section className="bg-dark-blue py-16 text-white">
      <Title />
      <Carousel roomData={roomData} />
    </section>
  );
};

export default RoomList;
