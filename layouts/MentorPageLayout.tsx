"use client";
import MentorCard from "@/components/MentorCard";
import PageHeading from "@/components/PageHeading";
import { SearchBar } from "@/components/ui/SearchBar";
import { MentorData } from "@/constants/constants";
import { useState } from "react";

const MentorPageLayout = () => {
  const [mentorData, setMentorData] = useState<typeof MentorData>(MentorData);

  return (
    <div className="pt-20 relative z-10">
      <div className="flex flex-col items-center justify-center">
        <PageHeading longHeading="REACH OUT FOR GUIDANCE" />
        {mentorData.length > 0 && (
          <SearchBar setMentorData={setMentorData} mentors={mentorData} />
        )}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "80px" }}
        >
          {mentorData.map((mentor, idx) => (
            <MentorCard key={idx} data={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorPageLayout;
