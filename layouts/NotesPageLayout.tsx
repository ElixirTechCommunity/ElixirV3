import Link from "next/link";
import { NotesData } from "@/constants/constants";
import PageHeading from "@/components/PageHeading";
import SparklesText from "@/components/magicui/sparkles-text";

const NotesPageLayout = () => {
  return (
    <div className="pt-20 relative z-10">
      <div className="flex flex-col items-center justify-center">
        <PageHeading longHeading="YOUR LAST NIGHT STUDY GUIDE" />
        <div
          className="flex items-center justify-center flex-wrap "
          style={{ gap: "5rem", padding: "4rem 0" }}
        >
          {NotesData.map((item, idx) => (
            <div className="m-10" key={idx}>
              <Link
                href={item.url}
                target="_blank"
                key={item.id}
                className="flex flex-col items-center justify-center rounded-lg p-6 w-[90vw] md:w-96 shadow-lg border border-white"
              >
                <SparklesText text={item.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPageLayout;
