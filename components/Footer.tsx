import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/constants/constants";
import MagicButton from "./MagicButton";
import Image from "next/image";
import MinFooter from "./MinFooter";

const Footer = () => {
  return (
    <footer className="w-full relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-lg">
          Ready to take <span className="text-purple">your</span> skills to the
          next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out us today and let&apos;s discuss how we can help you achieve
          your goals.
        </p>
        <a href="/get-in-touch">
          <MagicButton
            title="Reach out to us today"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <MinFooter />
    </footer>
  );
};

export default Footer;
