import Hero from "@/components/page-home/section-hero/hero";
import RoomList from "@/components/page-home/section-roomlist/roomlist";
import Events from "@/components/page-home/section-events/events";
import Resort from "@/components/page-home/section-resort/resort";

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
