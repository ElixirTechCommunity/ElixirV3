import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { IconClock } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

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
              <Image
                src={clubImage}
                height={25}
                width={25}
                className="rounded-full object-cover aspect-[1/1] border-2 p-0 border-white ml-3"
                alt={clubName}
                loading="lazy"
              />
            </div>
          </CardItem>
        </div>
        <CardItem
          translateZ={50}
          className="my-4 self-center justify-self-center"
        >
          <Image
            src={eventImage}
            height="1000"
            width="1000"
            className="min-w-24 object-contain aspect-square rounded-xl group-hover/card:shadow-xl"
            alt={eventName}
            loading="lazy"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
        >
          {description}
        </CardItem>
        <div className="">
          <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 mt-4" />
          <div className=" flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              className="px-4 py-2 flex items-center gap-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <IconClock size={20} />
              <p>{String(deadline)}</p>
            </CardItem>
            {isOver(deadline) ? null : (
              <Link href={formLink} target="about_blank">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Register
                </CardItem>
              </Link>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
