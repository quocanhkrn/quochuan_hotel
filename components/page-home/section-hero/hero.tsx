import Image from "next/image";
import classes from "./hero.module.css";
import coverImg from "@/public/images/cover.png";
import Text from "./text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Hero = (): JSX.Element => {
  return (
    <section className={`${classes.hero} relative h-dvh overflow-hidden`}>
      <Image
        className={`${classes["cover-img"]} -z-10 scale-125 object-cover object-bottom lg:scale-100`}
        src={coverImg}
        alt="Cover image"
        placeholder="blur"
        priority
        fill
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
