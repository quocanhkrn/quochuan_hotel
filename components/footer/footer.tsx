import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../ui/logo/logo";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center gap-5 bg-dark-blue pt-10 text-white lg:flex-row lg:flex-wrap">
      <div className="container lg:w-fit lg:px-10">
        <div className="mb-5 h-12">
          <Logo colorClassName="fill-white" />
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faLocationDot}
              height={20}
              width={20}
            />
            15 Tôn Đức Thắng, TT. Đắk Mâm, H. Krông Nô, Đăk Nông
          </p>
          <a href="tel:02613597598">
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faPhone}
              height={15}
              width={20}
            />
            02613 597 598
          </a>
          <a href="mailto:khachsanquochuan@gmail.com">
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faEnvelope}
              height={15}
              width={20}
            />
            khachsanquochuan@gmail.com
          </a>
          <a href="https://www.facebook.com/khachsanquochuan">
            <FontAwesomeIcon
              className="mr-2 inline"
              icon={faFacebook}
              width={20}
              height={15}
            />
            Khách sạn Quốc Huấn
          </a>
        </div>
      </div>
      <div className="container aspect-video w-full lg:max-w-[500px] lg:self-start">
        <iframe
          className="h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31166.87437721892!2d107.8622712!3d12.4590897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3172251f92b3be3f%3A0x174049f8579dfa0e!2zS2jDoWNoIHPhuqFuIFF14buRYyBIdeG6pW4!5e0!3m2!1sen!2s!4v1721701695831!5m2!1sen!2s"
          loading="lazy"
        ></iframe>
      </div>
      <p className="w-full bg-white py-3 text-center text-dark-blue">
        Copyright &copy; {new Date().getFullYear()} Quoc Huan Group. All right
        reserved.
      </p>
    </section>
  );
};

export default Footer;
