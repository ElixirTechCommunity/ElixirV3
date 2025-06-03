"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { getEventTimeLine } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export interface EventsCardProps {
  title: string;
  description: string;
  eventName: string;
  eventImage: string;
  clubName: string;
  clubImage: string;
  deadline: Date | string;
  formLink: string;
}

function isOver(deadline: Date | string): boolean {
  const eventDate = new Date(deadline);
  const currentDate = new Date();
  return currentDate > eventDate;
}

export default function EventsCard({
  title,
  description,
  eventName,
  eventImage,
  clubName,
  clubImage,
  deadline,
  formLink,
}: EventsCardProps): JSX.Element {
  const tagsMap = {
    past: (
      <div className="h-4 w-max bg-blue-500 rounded-md text-xs px-2 py-1 text-center flex items-center justify-center absolute top-2 right-2">
        Completed
      </div>
    ),
    present: (
      <div className="h-4 w-max bg-red-500 rounded-md text-xs px-2 py-1 text-center flex items-center justify-center absolute top-2 right-2 text-white">
        Live
      </div>
    ),
    future: (
      <div className="h-4 w-max bg-green-500 rounded-md text-xs px-2 py-1 text-center flex items-center justify-center absolute top-2 right-2">
        Coming Up
      </div>
    ),
  };
  const images = [" "];
  return (
    <CardContainer className="inter-var">
      <CardBody className="flex flex-col justify-between relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-background/[0.4] dark:border-white/[0.2] border-black/[0.1] w-auto max-w-[20rem] sm:max-w-[20rem] h-auto rounded-xl p-6 border  ">
        <div className="flex justify-between items-center">
          <CardItem
            translateZ={50}
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          {/* Event organizing club logo */}
          <CardItem
            translateZ={50}
            className="text-neutral-500 dark:text-white"
          >
            <div className="flex items-center gap-3">
              <img
                src={clubImage}
                height={25}
                width={25}
                className="rounded-full object-cover aspect-[1/1] border-2 p-0 border-white ml-3"
                alt={clubName}
                loading="lazy"
              />
            </CardItem>
            <div>
              <div className="flex justify-between items-center">
                <CardItem
                  translateZ={50}
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
              </div>

              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
              >
                {description}
              </CardItem>
              <div className="">
                <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 mt-4" />
                <div className=" flex justify-between items-center mt-5">
                  <CardItem
                    translateZ={20}
                    // as="button"
                    className="rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs cursor-pointer font-bold hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors duration-200"
                  >
                    <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        View Details
                      </span>
                      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                        Click😗
                      </div>
                    </ModalTrigger>
                  </CardItem>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>

      {/* ======================================================Modal Container========================================= */}
      <ModalBody>
        <ModalContent>
          <div className="flex flex-row items-center justify-around">
            {/* part 1 -> image container */}
            <div className="flex justify-center pr-10 mr-10 items-center">
              {images.map((idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  {tagsMap[getEventTimeLine(deadline)]}
                  <Image
                    src={eventImage}
                    height="200"
                    width="200"
                    className="min-w-24 object-contain aspect-square rounded-xl group-hover/card:shadow-xl"
                    alt={eventName}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* part-2 -> details container */}
            <div className="items-center justify-center mt-4 ">
              {/* title name */}
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-neutral-600 dark:text-white">
                  Event Name: {title}
                </div>
              </div>
              {/* divider */}
              <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 mt-4" />
              {/* description */}
              <div className="text-neutral-500 mt-5 text-md max-w-sm mt-2 dark:text-neutral-300 ">
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                  Description:{" "}
                </span>
                {description}
              </div>
                {/* last date */}
                <div className="flex items-center rounded-xl text-md font-normal dark:text-white">
              {isOver(deadline) ? null : (
                <div className="flex items-center gap-2 text-md mt-5 dark:text-white w-max">
                  <p>Last date: {String(deadline)}</p>
                </div>
              )}
              </div>
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          {/* register button */}
          <div className=" flex flex-1 justify-between items-center mt-5">
            {/* Event organizing club logo */}
            <div className="text-neutral-500 dark:text-white">
              <div className="flex items-center gap-3">
                <img
                  src={clubImage}
                  height={25}
                  width={45}
                  className="object-cover aspect-[1/1] border-2 p-0 border-white ml-3"
                  alt={clubName}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="px-4 py-2 flex items-center gap-2 rounded-xl text-xs font-normal dark:text-white">
              {isOver(deadline) ? (
                <div className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs cursor-pointer font-bold hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors duration-200">
                    Registration closed
                  </div>
              ) : (
                <Link href={formLink} target="about_blank">
                  <div className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs cursor-pointer font-bold hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors duration-200">
                    Register
                  </div>
                </Link>
              )}
            </div>
          </div>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
