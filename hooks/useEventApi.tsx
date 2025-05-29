"use client";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { EVENT_API } from "@/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addEvents } from "@/store/slices/eventSlice";

const useEventApi = () => {
  const dispatch = useDispatch();
  const events = useSelector((store: any) => store?.event?.events);

  const fetchevents = useCallback(async () => {
    try {
      const events = await axios.get(EVENT_API);
      dispatch(addEvents(events.data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!events || events.length === 0) {
      fetchevents(); // It only runs when the component using this hook mounts
    }
  }, [fetchevents,events]);
};

export default useEventApi;
