"use client";

import { motion } from "framer-motion";
import { MentorData } from "@/constants/constants";
import { cn } from "@/lib/utils";

export function SearchBar({
  mentors = [{}],
  setMentorData,
}: {
  mentors: any[];
  setMentorData: (data: any) => void;
}) {
  const getFilteredMentor = (searchTerm: string) => {
    const filteredMentors = MentorData.filter((mentor) => {
      const values = Object.values(mentor);
      return values.some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return filteredMentors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const filteredMentors = getFilteredMentor(searchTerm);
    if (searchTerm.length === 0) {
      setMentorData(MentorData);
    } else {
      setMentorData(filteredMentors);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center my-10 items-center w-full">
      <form
        className={cn(
          "md:w-7/12 relative max-w-xl mx-auto border-b-2 border-white-100 h-12 overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
        )}
        onSubmit={onSubmit}
      >
        <input
          onChange={handleChange}
          placeholder="Search React, DevOps, Go..."
          type="text"
          className={cn(
            "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20"
          )}
        />

        <button
          type="submit"
          className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-300 h-4 w-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
              d="M5 12l14 0"
              initial={{
                strokeDasharray: "50%",
                strokeDashoffset: "50%",
              }}
              animate={{
                strokeDashoffset: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </motion.svg>
        </button>
      </form>
    </div>
  );
}
