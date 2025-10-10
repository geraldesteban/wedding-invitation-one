import { motion } from "framer-motion";

import Image from "next/image";

import Balloon from "@/app/_assets/LoveStory/balloon.png";
import Heart from "@/app/_assets/LoveStory/heart.png";

import BeachOne from "@/app/_assets/LoveStory/BeachOne.jpg";
import BeachTwo from "@/app/_assets/LoveStory/BeachTwo.jpg";
import BeachThree from "@/app/_assets/LoveStory/BeachThree.jpg";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function LoveStory() {
  return (
    <div
      id="lovestory"
      className="relative scroll-mt-[112px] max-lg:scroll-mt-[0px]"
    >
      <motion.div
        className="relative rounded-bl-full rounded-tl-full z-10 w-full"
        initial={{ width: "1px", opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="bg-[#ccaf94] rounded-br-full rounded-tr-full absolute h-full w-full -z-5"></div>
        <div className="bg-[#d8c2b4] rounded-br-full rounded-tr-full absolute h-[75px] w-full -z-10 max-xl:h-[70px] max-lg:h-[60px] max-md:h-[50px]"></div>
        <h2 className="text-white text-center z-10 py-2 mx-5 whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
          OUR LOVE STORY
        </h2>
      </motion.div>
      {/* Content */}
      <div className="flex items-center pt-20 max-lg:pt-10 max-md:pt-5 max-lg:flex-col">
        <motion.div
          className={`${cinzel.className} flex flex-col gap-10 text-[#8f7563] text-3xl max-md:text-sm max-md:gap-5 ml-10 max-lg:ml-5 max-lg:self-start z-50`}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <p>2007 - We first met</p>
          <p>2023 - Reunited and became a couple</p>
          <p>2025 - We’re getting married</p>
          <Image
            src={Balloon}
            alt="Balloon"
            className="max-lg:hidden"
            quality={100}
          />
        </motion.div>
        <motion.div
          className="flex-1 max-lg:py-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-end mx-20 max-lg:static max-2xl:mx-15 max-xl:mx-10 max-lg:mx-15 max-lg:mt-5 max-md:mx-10">
            {/* Left image */}
            <div className="flex-1 overflow-hidden border-4 border-gray-300 h-[100%] -rotate-12 z-0">
              <div className="w-full h-[100%]">
                <Image
                  src={BeachTwo}
                  alt="Beach Two"
                  className="w-full h-[100%] transition-transform duration-500 lg:hover:scale-125"
                  quality={100}
                />
              </div>
            </div>

            {/* Middle image */}
            <div className="flex-1 overflow-hidden border-4 border-gray-300 h-[100%] -rotate-1 relative z-10 shadow-xl">
              <div className="w-full h-[100%]">
                <Image
                  src={BeachThree}
                  alt="Beach Three"
                  className="w-full h-[100%] transition-transform duration-500 lg:hover:scale-125"
                  quality={100}
                />
              </div>
            </div>

            {/* Right image */}
            <div className="flex-1 overflow-hidden  border-4 border-gray-300 h-[100%] rotate-12 z-0">
              <div className="w-full h-[100%]">
                <Image
                  src={BeachOne}
                  alt="Beach One"
                  className="w-full h-[100%] transition-transform duration-500 lg:hover:scale-125"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full hidden max-lg:block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={Balloon}
            alt="Balloon"
            className="h-[250px] w-[30%] max-sm:h-[150px] mx-auto"
            quality={100}
          />
        </motion.div>
      </div>
      <Image
        src={Heart}
        alt="Heart"
        className="absolute top-10 right-0 -z-50"
        quality={100}
      />
    </div>
  );
}
export default LoveStory;
