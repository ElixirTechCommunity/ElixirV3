"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id='testimonials' className='py-20'>
      <h1 className='heading'>
        Listen from
        <span className='text-purple'> the members</span>
      </h1>

      <div className='flex flex-col items-center max-lg:mt-10'>
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'
        >
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
        </div>
        <a href='/testimonials' className='mt-10 md:mt-0'>
          <MagicButton
            title='View More'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>

        <div className=' hidden flex-wrap items-center justify-center gap-4 md:gap-16 mt-20'>
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className='flex md:max-w-60 max-w-32 gap-2'>
                <Image
                  src={company.img}
                  alt={company.name}
                  height={40}
                  width={40}
                  className='md:w-10 w-5'
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  className='md:w-24 w-20'
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
