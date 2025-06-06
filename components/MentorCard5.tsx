import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const MentorCard5 = ({ data }: { data: any }) => {
  // console.log("🚀 ~ MentorCard ~ data:", data)

  return (
    <div className="rounded-lg border-white/50 border px-4 py-6 w-80 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-2xl bg-opacity-20 backdrop-saturate-50 backdrop-contrast-100">
      <div className="relative mb-4">
        <img
          className="aspect-square w-full rounded-lg object-cover h-[16rem]"
          src={"https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" + data.image}
          alt="mentor_image"
        />
      </div>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="truncate text-xl font-semibold">{data.name}</h4>
      </div>
      <div className="flex items-center gap-3">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          className="hidden md:block"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M250.82,90.71l-120-64a5.94,5.94,0,0,0-5.64,0l-120,64a6,6,0,0,0,0,10.58L34,116.67v49.62a14,14,0,0,0,3.55,9.32C50.42,189.94,79.29,214,128,214a127.21,127.21,0,0,0,50-9.73V240a6,6,0,0,0,12,0V198.35a113.18,113.18,0,0,0,28.45-22.75,13.91,13.91,0,0,0,3.55-9.31V116.67l28.82-15.38a6,6,0,0,0,0-10.58ZM128,202c-44,0-70-21.56-81.52-34.41a2,2,0,0,1-.48-1.3V123.07l79.18,42.22a6,6,0,0,0,5.64,0L178,140.13v51C165,197.35,148.45,202,128,202Zm82-35.71a2,2,0,0,1-.48,1.3A100.25,100.25,0,0,1,190,184.3V133.73l20-10.66Zm-22.15-45a6.27,6.27,0,0,0-1-.71l-56-29.86a6,6,0,0,0-5.64,10.58L175.25,128,128,153.2,20.75,96,128,38.8,235.25,96Z"></path>
        </svg>
        <p className="align-middle text-xs text-white line-clamp-1">{data.techStack}</p>
      </div>
      <div></div>
      <a
        href={data.linkedIn}
        target="_blank"
        className="px-6 py-2 w-max mx-auto mt-3 h-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 duration-300 hover:scale-105 text-sm flex items-center gap-2"
      >
        LinkedIn <FaLinkedin size={16} color="#0072b1" />
      </a>
    </div>
  );
};

export default MentorCard5;
