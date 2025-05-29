import Image from "next/image";
import React, { memo } from "react";
import { FaLinkedin } from "react-icons/fa6";

const MentorCard = ({ data }: { data: any }) => {
  return (
    <div className="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-80 w-64 rounded-2xl hover:duration-700 ">
      <div className="w-64 h-80 bg-gray-400 text-gray-800">
        <Image
          src={
            "https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" +
            data.image
          }
          width={240}
          height={320}
          alt={data.name}
          className="object-cover w-full h-full"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="absolute bg-gray-50 -bottom-[105px] h-44 w-64 p-3 flex flex-col  group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-gray-800 font-bold text-xl">{data.name}</span>

        <span className="text-gray-400 text-xs">{data.techStack}</span>

        <div className="my-4 w-full flex items-center justify-between gap-10 ">
          <a
            href={data.linkedIn}
            target="_blank"
            className="px-8 py-2 rounded-md border border-black bg-white text-black-100 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center gap-1"
          >
            Linkedin
            <FaLinkedin color="#0072b1" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(MentorCard);
