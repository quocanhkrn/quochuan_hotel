import Policy from "@/components/page-details/section-policy/policy";
import RoomDetails from "@/components/page-details/section-room-details/room-details";
import { getAllRoomData, getOneRoomData } from "@/lib/apis";
import { Room } from "@/lib/types";

const RoomDetailsPage = async ({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const roomData: Room | undefined = await getOneRoomData(params?.id);

  return (
    <>
      <RoomDetails roomData={roomData} />
      <Policy />
    </>
  );
};

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const roomData: Room[] = await getAllRoomData();

  return roomData?.map((room: Room) => ({
    id: room.name[1].toLowerCase().split(" ").join("_"),
  }));
};

export const dynamicParams: boolean = false;

export default RoomDetailsPage;
