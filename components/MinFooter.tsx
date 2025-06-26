import { socialMedia } from "@/constants/constants";
import Image from "next/image";
const MinFooter = () => {
    return (
      <div className="w-full">
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-10 pb-10">
          <p className="md:text-sm text-xs md:font-normal font-light">
            Copyright © 2024 Elixir Tech Community
          </p>
          <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
            {socialMedia.map((info) => (
              <a
                href={info.link}
                target="_blank"
                rel="noreferrer"
                key={info.id}
              >
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
      </div>
    );
};

export default MinFooter;
