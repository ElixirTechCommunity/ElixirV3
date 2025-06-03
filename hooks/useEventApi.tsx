"use client";
import { useEffect } from "react";
import axios from "axios";
import { EVENT_API } from "@/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addEvents } from "@/store/slices/eventSlice";

const useEventApi = () => {
  const dispatch = useDispatch();
  const events = useSelector((store: any) => store?.event?.events);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(EVENT_API);
        dispatch(addEvents(res.data));
      } catch (err) {
        console.error("Failed to fetch events", err);
      }
    };

    if (!events || events.length === 0) {
      fetchEvents();
    }
  }, [dispatch, events]);

  return { events };
};

export default useEventApi;
