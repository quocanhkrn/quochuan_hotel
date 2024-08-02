"use server";

import * as fs from "fs/promises";
import path from "path";
import { Room } from "./types";

export const getAllImages = async (folderName: string): Promise<string[]> => {
  const dirPath: string = path.join(
    __dirname,
    "../../../",
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

export const getRoomData = async (): Promise<Room[]> => {
  const dirPath: string = path.join(
    __dirname,
    "../../../",
    "lib",
    "room-data.json",
  );

  return await fs
    .readFile(dirPath)
    .then((res) => JSON.parse(res.toString()))
    .catch((err) => {
      throw err;
    });
};
