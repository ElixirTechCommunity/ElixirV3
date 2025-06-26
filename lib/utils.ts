import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getEventTimeLine = (time: any) => {
  const eventDate = new Date(time);
  const currentDate = new Date();
  const difference = eventDate.getTime() - currentDate.getTime();
  const differenceInCalendarDays = difference / (1000 * 60 * 60 * 24);
  if (differenceInCalendarDays <= 2 && differenceInCalendarDays >= 0) {
    return "present";
  } else if (differenceInCalendarDays <= -1) {
    return "past";
  } else {
    return "future";
  }
};