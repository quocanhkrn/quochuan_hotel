import { Metadata } from "next";
import Hero from "@/components/page-home/section-hero/hero";
import RoomList from "@/components/page-home/section-roomlist/roomlist";
import Events from "@/components/page-home/section-events/events";
import Resort from "@/components/page-home/section-resort/resort";

export const metadata: Metadata = {
  title: "QUỐC HUẤN HOTEL | THE BEGINNING OF AMAZING JOURNEYS",
};

const Homepage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <RoomList />
      <Events />
      <Resort />
    </>
  );
};

export default Homepage;
