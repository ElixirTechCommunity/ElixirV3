import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const MentorCard2 = ({ data }: { data: any }) => {
  // console.log("🚀 ~ MentorCard ~ data:", data)

  return (
    <div className="relative cursor-pointer hover:shadow-[0_0_16px_rgb(156,163,175)] overflow-hidden rounded-sm text-gray-50 group w-64 h-80">
      <img
        src={"https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" + data.image}
        alt=""
        className="object-cover w-full h-full mx-auto group-hover:w-2/5 group-hover:object-center group-hover:duration-500 group-hover:absolute group-hover:left-0"
      />
      {/* <div className="mt-2 p-4 flex flex-col gap-4 absolute right-0 group-hover:duration-1000 w-3/5"> */}
      <div className="mt-2 p-4 h-full flex flex-col gap-4 absolute right-0 w-3/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ">
        <div className="font-bold text-2xl">{data.name}</div>
        <div className="text-gray-400 text-sm">{data.techStack}</div>
        <div className="my-4 w-full flex items-center justify-between gap-10 ">
          <a
            href={data.linkedIn}
            target="_blank"
            className="px-5 py-2 rounded-md border border-black bg-white text-black-100 absolute left-1/2 translate-x-[-50%] bottom-12 text-sm flex items-center gap-1"
          >
            Linkedin
            <FaLinkedin color="#0072b1" size={10} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard2;
