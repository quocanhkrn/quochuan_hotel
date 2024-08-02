import Image from "next/image";
import classes from "./hero.module.css";
import coverImg from "@/public/images/cover.png";
import Text from "./text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className={`${classes.hero} relative h-dvh overflow-hidden`}>
      <Image
        className={`${classes["cover-img"]} absolute left-0 top-0 -z-10 h-full w-full scale-125 object-cover object-bottom lg:scale-100`}
        src={coverImg}
        alt="Cover image"
      />
      <Text />
      <p
        className={`${classes["angles-down-icon"]} absolute bottom-[10%] left-1/2 text-2xl`}
      >
        <FontAwesomeIcon icon={faAnglesDown} color="white" />
      </p>
    </section>
  );
};

export default Hero;
