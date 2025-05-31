"use client";

import { Chapters } from "@/constants/constants";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";

const ChapterSection = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Our Core <span className="text-purple">Societies</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        {Chapters.map((item, idx) => (
          <div
            className="h-auto w-64 flex items-center justify-center"
            key={idx}
          >
            <Link href={item.link} target="_blank">
              <PinContainer title={item.title} href={item.link}>
                <div
                  className={`flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ${
                    idx == 1
                      ? "md:w-[18rem] md:h-[22rem] w-[16rem] h-[20rem]"
                      : " w-[16rem] h-[20rem]"
                  }`}
                >
                  <h3 className="max-w-xs !pb-2 !m-0 font-normal  text-base text-slate-100">
                    {item.title}
                  </h3>
                  <div className="text-sm !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">{item.des}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg object-contain mt-4">
                    <Image
                      src={item.img}
                      alt="tect"
                      width={350}
                      height={200}
                      className="flex flex-1 w-full rounded-lg "
                      loading="lazy"
                    />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterSection;
