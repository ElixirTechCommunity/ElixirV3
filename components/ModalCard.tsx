"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import Link from "next/link";
import styles from "layouts/layouts.module.css";
import { motion } from "framer-motion";
import { getEventTimeLine } from "@/lib/utils";

export interface ModalCardProps {
  title: string;
  description: string;
  eventName: string;
  eventImage: string;
  clubName: string;
  clubImage: string;
  deadline: Date | string;
  formLink: string;
}

export default function ModalCard({
  title,
  description,
  eventName,
  eventImage,
  clubName,
  clubImage,
  deadline,
  formLink,
}: ModalCardProps): JSX.Element {
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

  return (
      <Modal>
        <ModalTrigger>
          <div className="hidden md:block bg-transparent text-sm hover:bg-blue-600 text-white-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded">
            View Details
          </div>
        </ModalTrigger>
        <ModalBody className="overflow-y-scroll no-scrollbar">
          <ModalContent>
            <div className={styles.container}>
              {/* part 1 -> image container */}
              <div className="flex justify-center items-center relative mr-3">
                <motion.div
                  key={eventName}
                  style={{
                    rotate: Math.random() * 0.3 - 0.25,
                  }}
                  className="rounded-xl mr-7 mt-4 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  {tagsMap[getEventTimeLine(deadline)]}
                  <Image
                    src={eventImage}
                    height="200"
                    width="200"
                    className="min-w-15 object-contain aspect-square rounded-xl"
                    alt={eventName}
                    loading="lazy"
                  />
                </motion.div>
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
                <div className="text-neutral-500 mt-5 text-md max-w-sm mt-2 dark:text-neutral-300">
                  <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    Description:{" "}
                  </span>
                  {description}
                </div>
                {/* last date */}
                <div className="flex items-center rounded-xl text-md font-normal dark:text-white">
                  <div className="flex items-center gap-2 text-md mt-5 dark:text-white w-max">
                    <p>Last date: {String(deadline)}</p>
                  </div>
                </div>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <div className=" flex flex-1 justify-between items-center mt-1">
              <div className="text-neutral-500 dark:text-white">
                <div className="flex items-center gap-3">
                  <Image
                    src={clubImage}
                    height={25}
                    width={45}
                    className="rounded-full object-cover aspect-[1/1] border-2 p-0 border-white ml-3"
                    alt={clubName}
                    loading="lazy"
                  />
                </div>
              </div>
              {/* register button */}
              <div className="px-4 py-2 flex items-center gap-2 rounded-xl font-normal dark:text-white">
                {/* {isOver(deadline) ? null : ( */}
                <Link href={formLink} target="about_blank">
                  <div className="bg-transparent hover:bg-blue-600 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Register
                  </div>
                </Link>
                {/* )} */}
              </div>
            </div>
          </ModalFooter>
        </ModalBody>
      </Modal>
  );
}
