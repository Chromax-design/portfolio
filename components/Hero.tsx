import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-5">
          <div className="relative overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] -z-10" />
            <div className="relative w-72 h-72 overflow-hidden">
              <Image
                src="/portfolio4.jpg"
                alt=""
                className=" w-72 h-72 rounded-full object-cover object-top"
                fill
              />
            </div>
          </div>
          <TextGenerateEffect
            className="text-center text-4xl sm:text-5xl font-semibold lg:text-[65px] capitalize"
            words="I'm Godskey, a full stack developer based in Nigeria"
          />
          <p className="text-center md:tracking-wider mb-4 lg:max-w-[50vw] text-sm sm:text-[18px] leading-7">
            Transforming Ideas into Stunning Web Interfaces with Expertise and
            Precision – An Experienced Developer Dedicated to Crafting Seamless
            User Experiences.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
