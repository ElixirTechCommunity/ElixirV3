import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/constants/constants";
import MagicButton from "./MagicButton";
import Image from "next/image";

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
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-10 pb-10">
        <p className="md:text-sm text-xs md:font-normal font-light">
          Copyright © 2024 Elixir Tech Community
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a href={info.link} target="_blank" rel="noreferrer" key={info.id}>
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
