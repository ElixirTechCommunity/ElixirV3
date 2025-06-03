"use client";

import React, { memo } from "react";

import { companies, testimonials } from "@/constants/constants";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Listen from
        <span className="text-purple"> the members</span>
        <span className="text-purple"> the members</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <a href="/testimonials" className="mt-10 md:mt-0">
          <MagicButton
            title="View More"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <div className=" hidden flex-wrap items-center justify-center gap-4 md:gap-16 mt-20">
        <div className=" hidden flex-wrap items-center justify-center gap-4 md:gap-16 mt-20">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center gap-3 w-28 sm:w-32 md:w-48 lg:w-60"
            >
              <div className="flex-shrink-0">
                <Image
                  src={company.img}
                  alt={`${company.name} logo`}
                  width={40}
                  height={40}
                  className="w-6 sm:w-8 md:w-10 object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src={company.nameImg}
                  alt={`${company.name} name`}
                  alt={`${company.name} name`}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={24}
                  className="w-20 sm:w-24 md:w-32 object-contain"
                />
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
