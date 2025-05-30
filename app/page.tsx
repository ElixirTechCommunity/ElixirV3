"use client";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ChapterSection from "@/components/ChapterSection";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoHero from "@/public/Elixir-logo.png";
import useEventApi from "@/hooks/useEventApi";

const Home = () => {
  useEventApi();

  return (
    <div className="max-w-7xl relative z-10 w-full -mt-10">
      <motion.div className="hidden  md:block absolute -rotate-12 top-96 -right-16  z-10 ">
        <Image
          src={LogoHero}
          height={300}
          width={300}
          alt="tect"
          className="rounded-md"
        />
      </motion.div>
      <Hero />
      <ChapterSection />
      <Testimonials />
    </div>
  );
};

export default Home;
