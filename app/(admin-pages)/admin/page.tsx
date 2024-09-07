"use client";

import { getAllRoomData } from "@/lib/apis";
import { Room } from "@/lib/types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type ModalContent = {
  header: JSX.Element;
  body: JSX.Element;
  footer: JSX.Element;
};

const AdminPage = (): JSX.Element => {
  const [roomData, setRoomData] = useState<Room[] | null>(null);
  const [modalContent, setModalContent] = useState<ModalContent>({
    header: <></>,
    body: <></>,
    footer: <></>,
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    Promise.resolve(getAllRoomData()).then((data) => setRoomData(data));
  }, []);

  const ModifyPriceModalContent = (roomId: string): ModalContent => {
    const room: Room | undefined = roomData?.find(
      ({ id }: Room) => id === roomId,
    );

    return {
      header: (
        <div className="leading-snug">
          <h1>ĐIỀU CHỈNH GIÁ PHÒNG</h1>
          <p className="font-normal">{room?.name[0]}</p>
        </div>
      ),
      body: (
        <div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 gap-y-5">
            <Input
              type="number"
              label="Giờ"
              labelPlacement="outside"
              placeholder="Giá"
              value="100000"
              variant="bordered"
            />
            <Input
              type="number"
              label="Bước nhảy giờ"
              labelPlacement="outside"
              placeholder="Giá"
              value="100000"
              variant="bordered"
            />
            <Input
              type="number"
              label="Đêm"
              labelPlacement="outside"
              placeholder="Giá"
              value="100000"
              variant="bordered"
            />
            <Input
              type="number"
              label="Ngày"
              labelPlacement="outside"
              placeholder="Giá"
              value="100000"
              variant="bordered"
            />
          </div>
        </div>
      ),
      footer: (
        <Button className="w-full" color="primary">
          Cập nhật
        </Button>
      ),
    };
  };
  const ImageGalleryModalContent = (roomId: string): ModalContent => {
    return { header: <p></p>, body: <p></p>, footer: <p></p> };
  };

  const handleOpenModal = (
    type: "modifyPrice" | "imageGallery",
    roomId: string,
  ): void => {
    switch (type) {
      case "modifyPrice":
        setModalContent(ModifyPriceModalContent(roomId));
        onOpen();
        break;

      default:
        setModalContent(ImageGalleryModalContent(roomId));
        onOpen();
        break;
    }
  };

  return (
    <div className="container flex flex-col gap-3 py-4">
      {roomData?.map(({ id, name, cover }: Room) => (
        <Card>
          <CardHeader className="relative aspect-video">
            <Image src={`/images/rooms/${id}/${cover}`} alt={name[1]} fill />
          </CardHeader>
          <CardBody>
            <h1 className="text-2xl font-black uppercase">{name[1]}</h1>
            <p>{name[0]}</p>
            <div className="mt-3 flex gap-3">
              <Button
                className="grow uppercase text-white"
                color="primary"
                onPress={(e) => handleOpenModal("modifyPrice", id)}
              >
                Sửa giá
              </Button>
              <Button
                className="grow uppercase text-white"
                color="secondary"
                onPress={(e) => handleOpenModal("imageGallery", id)}
              >
                Thư viện ảnh
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}

      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>{modalContent.header}</ModalHeader>
          <ModalBody>{modalContent.body}</ModalBody>
          <ModalFooter>{modalContent.footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AdminPage;
