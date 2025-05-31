import PageHeading from "@/components/PageHeading";
import { testimonials } from "@/constants/constants";
import { cn } from "@/lib/utils";
import styles from "./layouts.module.css";
import Image from "next/image";
const TestimonialsPageLayout = () => {
  return (
    <div className="pt-20 relative z-10">
      <div className="flex flex-col items-center justify-center">
        <PageHeading
          smallHeading="Members"
          longHeading="LISTEN TO OUR MEMBERS"
        />
        <ul
          className="flex items-center justify-center flex-wrap "
          style={{ gap: "3rem", padding: "4rem 0" }}
        >
          {testimonials.map((item, idx) => (
            <li
              className={cn(
                "rounded-2xl border border-slate-800 p-5 md:p-16 ",
                styles.testimonials
              )}
              key={idx}
            >
              <blockquote>
                <span className=" relative z-20 text-sm md:text-base leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3 h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={
                        "https://res.cloudinary.com/dta8uzpup/image/upload/v1719346276" +
                        item.img
                      }
                      alt="profile"
                      loading="lazy"
                    />
                  </div>
                  <span className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>

                    <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialsPageLayout;
