import useInView from "@/hooks/useInView";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const MentorCard3 = ({ data }: { data: any } ) => {
  const [ref, inView] = useInView(0.8);

  return (
    <div ref={ref} className="w-64 h-80 [perspective:1000px] group cursor-pointer">
      <div className="absolute h-full w-full -z-2"></div>
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] 
            ${inView ? "[transform:rotateY(180deg)] md:[transform:none]" : ""} 
             md:group-hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute w-full h-full rounded-md overflow-hidden ">
          <Image
            src={"https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" + data.image}
            fill
            alt={data.name}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute w-full h-full bg-black/80 flex flex-col text-center justify-center items-center gap-3 text-white rounded-md p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-xl font-bold">{data.name}</div>
          <div className="text-gray-400 text-sm">{data.techStack}</div>
          <a
            href={data.linkedIn}
            target="_blank"
            className="px-6 py-2 rounded-md bg-white/80 hover:bg-white/100 border border-black text-black text-sm flex items-center gap-2"
          >
            LinkedIn <FaLinkedin size={16} color="#0072b1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard3;
