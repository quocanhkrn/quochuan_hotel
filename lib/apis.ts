"use server";

import * as fs from "fs/promises";
import path from "path";
import { Room } from "./types";

export const getAllImages = async (folderName: string): Promise<string[]> => {
  const dirPath: string = path.join(
    process.cwd(),
    "public",
    "images",
    folderName,
  );

  return await fs
    .readdir(dirPath)
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const getAllRoomData = async (): Promise<Room[]> => {
  const dirPath: string = path.join(process.cwd(), "lib", "room-data.json");

  return await fs
    .readFile(dirPath)
    .then((res) => JSON.parse(res.toString()))
    .catch((err) => {
      throw err;
    });
};

export const getOneRoomData = async (roomName: string) => {
  const roomData = await getAllRoomData();

  return roomData.find(
    (room) => room.name[1].toLowerCase().split(" ").join("_") === roomName,
  );
};

export const getPolicy = async (): Promise<string> => {
  const dirPath: string = path.join(process.cwd(), "lib", "policy.md");

  return await fs
    .readFile(dirPath)
    .then((res) => res.toString())
    .catch((err) => {
      throw err;
    });
};
