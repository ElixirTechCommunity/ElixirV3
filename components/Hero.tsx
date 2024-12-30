import { FaDiscord } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <AnimatedShinyTextDemo
            text={"Hack with us at Aurora 2024"}
            link="https://aurora.elixircommunity.in/"
          />

          <TextGenerateEffect
            words="Transforming people into experienced developers"
            className="text-center text-3xl md:text-4xl lg:text-6xl"
          />
          <a href="http://dsc.gg/elixirtechcommunity" target="_blank">
            <MagicButton
              title="Join Discord"
              icon={<FaDiscord size={20} />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
