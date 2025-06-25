"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

export interface MobileCardProps {
  title: string;
  description: string;
  eventName: string;
  eventImage: string;
  clubName: string;
  clubImage: string;
  deadline: Date | string;
  formLink: string;
}

export default function MobileCard({
  title,
  description,
  eventName,
  eventImage,
  clubName,
  clubImage,
  deadline,
  formLink,
}: MobileCardProps): JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="bg-transparent text-sm hover:bg-blue-600 text-white-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded block md:hidden">
          View Details
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col max-w-sm mx-auto w-auto">
          <DrawerHeader>
            <div className="flex justify-center items-center relative ">
              <Image
                src={eventImage}
                height="200"
                width="200"
                className="min-w-24 object-contain aspect-square rounded-xl group-hover/card:shadow-xl"
                alt={eventName}
                loading="lazy"
              />
            </div>
            <div className="p-2 pb-0 ">
              <DrawerTitle className="flex justify-between items-center mb-3">
                {title}
                <div className="flex items-center">
                  <Image
                    src={clubImage}
                    height={30}
                    width={32}
                    className="rounded-full object-cover aspect-[1/1] border-2 p-0 border-white ml-3"
                    alt={clubName}
                  />
                </div>
              </DrawerTitle>
              <DrawerDescription className="text-left mb-3">
                {description}
              </DrawerDescription>
              <div className="flex items-center text-md dark:text-white w-max">
                <p>Last date: {String(deadline)}</p>
              </div>
            </div>
          </DrawerHeader>
          <DrawerFooter className="mb-2">
            <Link href={formLink} target="about_blank">
              <div className="bg-transparent text-center text-sm hover:bg-blue-600 text-white-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded">
                Register
              </div>
            </Link>
            <DrawerClose asChild>
              <div className="bg-transparent text-center text-sm hover:bg-blue-600 text-white-700 font-semibold hover:text-white px-3 py-2 border border-blue-500 hover:border-transparent rounded">
                Cancel
              </div>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
