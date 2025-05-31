"use client";
import PageHeading from "@/components/PageHeading";
import { GetInTouchForm } from "@/components/GetInTouchForm";
import styles from "./layouts.module.css";

const GetInTouchLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageHeading
        smallHeading="Join the community"
        longHeading="Got the tech itch? Get your fix!"
        link="http://dsc.gg/elixirtechcommunity"
      />
      <div className="w-full h-full z-10 relative flex flex-col items-center justify-center">
        <div className={styles.formContainer}>
          <GetInTouchForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchLayout;
