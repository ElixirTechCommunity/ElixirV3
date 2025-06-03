import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ChapterSection from "@/components/ChapterSection";
import Image from "next/image";
import HeroLogo from "@/public/Elixir-logo.webp";

async function Home() {
  return (
    <div className="max-w-7xl relative z-10 w-full -mt-10">
      <div className="hidden md:block absolute -rotate-12 top-96 -right-16 z-10">
        <Image
          src={HeroLogo}
          height={300}
          width={300}
          alt="Elixir Logo"
          className="rounded-md"
          priority
          quality={90}
        />
      </div>
      <Hero />
      <ChapterSection />
      <Testimonials />
    </div>
  );
}

export default Home;
