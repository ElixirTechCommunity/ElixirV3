"use client";
import EventsCard from "@/components/EventsCard";
import PageHeading from "@/components/PageHeading";
import useEventApi from "@/hooks/useEventApi";
import { useSelector } from "react-redux";
type Event = {
  id: number;
  name: string;
  event_summary: string;
  img_link: string;
  club: string;
  date: string;
  form_link: string;
};

const EventsPageLayout = () => {
  const events = useSelector((store: any) => store?.event?.events);
  useEventApi();

  return (
    <div className='pt-20 relative z-10 '>
      <div className='flex flex-col items-center justify-center relative'>
        <PageHeading  longHeading="THAT'S HOW WE ROLL!" />
        <div className='flex flex-wrap justify-center items-stretch gap-16 pt-10'>
          {events?.map((event: Event) => (
            <EventsCard
              key={event.id}
              title={event.name}
              description={event.event_summary}
              eventName={event.name}
              eventImage={event.img_link}
              clubName={event.club}
              clubImage='https://via.placeholder.com/25'
              deadline={event.date}
              formLink={event.form_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPageLayout;
