import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const MentorCard4 = ({ data }: { data: any }) => {
  return (
    <div className="w-64 h-80 [perspective:1000px] group cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700">
        <div className="absolute w-full h-full rounded-md overflow-hidden transition-all duration-500 group-hover:blur-sm">
          <img
            src={"https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" + data.image}
            alt=""
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute w-full h-full flex opacity-0 flex-col text-center justify-center items-center gap-3 text-white rounded-md p-4 group-hover:opacity-100 transition-all duration-500">
          <div className="text-xl font-bold">{data.name}</div>
          <div className="text-gray-200 text-sm">{data.techStack}</div>
          <a
            href={data.linkedIn}
            target="_blank"
            className="px-6 py-2 rounded-md bg-white/80 border border-black text-black text-sm flex items-center gap-2"
          >
            LinkedIn <FaLinkedin size={16} color="#0072b1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard4;
