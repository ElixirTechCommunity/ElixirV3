"use client";
import MentorCard from "@/components/MentorCard";
import PageHeading from "@/components/PageHeading";
import { SearchBar } from "@/components/ui/SearchBar";
import { MentorData } from "@/constants/constants";
import { useState } from "react";

const MentorPageLayout = () => {
  const [mentorData, setMentorData] = useState<typeof MentorData>(MentorData);

  return (
    <div className="pt-20 pb-10 relative z-10 w-full">
      <div className="flex flex-col items-center justify-center">
        <PageHeading longHeading="REACH OUT FOR GUIDANCE" />
        <SearchBar setMentorData={setMentorData} mentors={mentorData} />
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "80px" }}
        >
          {mentorData?.length === 0 ? (
            <div className="flex justify-center items-center text-3xl font-bold w-[320px] py-20 rounded-3xl overflow-hidden bg-black">
              <p className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">No mentors found</p>
            </div>
          ) : (
            mentorData?.map((mentor, idx) => (
              <MentorCard key={idx} data={mentor} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorPageLayout;
