"use client";

import { fahkwang500 } from "@/components/ui/fonts";
import { Room } from "@/lib/types";
import { useState } from "react";

const Price = ({ roomData }: { roomData: Room | undefined }): JSX.Element => {
  const [timeframe, setTimeframe] = useState<"hour" | "night" | "day">("hour");
  const timeframName = (
    key: typeof timeframe = timeframe,
  ): "giờ" | "đêm" | "ngày" => {
    switch (key) {
      case "hour":
        return "giờ";

      case "night":
        return "đêm";

      case "day":
        return "ngày";
    }
  };

  return (
    <>
      <div className="flex justify-center  gap-2">
        {["hour", "night", "day"].map((key: string) => (
          <button
            key={key}
            className={`inline-block border-[1px] border-dark-blue px-3 py-2 capitalize ${timeframe === key && "bg-dark-blue text-white"}`}
            onClick={() => setTimeframe(key as "hour" | "night" | "day")}
          >
            {timeframName(key as "hour" | "night" | "day")}
          </button>
        ))}
      </div>
      <h1 className={`${fahkwang500.className} mt-3 text-4xl`}>
        <span className={`${fahkwang500.className} text-base`}>Chỉ từ </span>
        {roomData?.price[timeframe].toLocaleString("en-US")}
        <span className={`${fahkwang500.className} text-base`}>
          {" "}
          VNĐ/{timeframName()}
        </span>
      </h1>
      {timeframe === "hour" && (
        <p className="mb-2">
          Và
          <span className="font-bold">
            {" "}
            {roomData?.price.hourStep.toLocaleString("en-US")} VNĐ{" "}
          </span>
          cho những giờ tiếp theo
        </p>
      )}
      <p className="text-sm italic text-red-500">
        *Giá trên chưa bao gồm VAT và phụ thu
      </p>
    </>
  );
};

export default Price;
