import { Cinzel } from "next/font/google";
import Image from "next/image";

import Balloon from "@/app/_assets/balloon.png";
import Heart from "@/app/_assets/heart.png";

import BeachOne from "@/app/_assets/BeachOne.jpg";
import BeachTwo from "@/app/_assets/BeachTwo.jpg";
import BeachThree from "@/app/_assets/BeachThree.jpg";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function LoveStory() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <div className="flex-1 relative rounded-bl-full rounded-tl-full z-10 w-full">
          <div className="bg-[#ccaf94] rounded-br-full rounded-tr-full absolute h-full w-full -z-5"></div>
          <div className="bg-[#d8c2b4] rounded-br-full rounded-tr-full absolute h-[110px] w-full -z-10 max-xl:h-[90px] max-lg:h-[70px] max-md:h-[60px]"></div>
          <h2 className="text-white text-[50px] text-center z-10 py-2 mx-5 whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
            OUR LOVE STORY
          </h2>
        </div>
        <div className="flex-1"></div>
      </div>
      {/* Content */}
      <div className="flex items-center max-lg:flex-col">
        <div
          className={`${cinzel.className} flex flex-col gap-14 text-[#8f7563] text-[30px] max-md:text-[20px] max-md:gap-10 pt-36 max-md:pt-20 ml-20 z-50 max-lg:ml-5 max-lg:self-start`}
        >
          <span>2007 - We first met</span>
          <span>2023 - Reunited and became a couple</span>
          <span>2025 - We’re getting married</span>
          <Image src={Balloon} alt="Balloon" className="max-lg:hidden" />
        </div>
        <div className="flex-1 relative pb-20 max-md:pb-10">
          <div
            className="flex justify-center items-end mx-20 max-2xl:mx-20 max-xl:mx-10 max-lg:mx-15 max-md:mx-10
               absolute -bottom-80 max-2xl:-bottom-50 max-xl:-bottom-40
               max-lg:static max-lg:mt-20"
          >
            {/* Left image */}
            <div className="flex-1 overflow-hidden border-4 border-gray-300 h-[100%] -rotate-12 z-0">
              <div className="w-full h-[100%] overflow-hidden">
                <Image
                  src={BeachTwo}
                  alt="Beach Two"
                  className="w-full h-[100%] object-cover transition-transform duration-500 lg:hover:scale-110"
                />
              </div>
            </div>

            {/* Middle image */}
            <div className="flex-1 overflow-hidden border-4 border-gray-300 h-[100%] -rotate-1 relative z-10 shadow-xl">
              <div className="w-full h-[100%] overflow-hidden">
                <Image
                  src={BeachThree}
                  alt="Beach Three"
                  className="w-full h-[100%] object-cover transition-transform duration-500 lg:hover:scale-110"
                />
              </div>
            </div>

            {/* Right image */}
            <div className="flex-1 overflow-hidden border-4 border-gray-300 h-[100%] rotate-12 z-0">
              <div className="w-full h-[100%] overflow-hidden">
                <Image
                  src={BeachOne}
                  alt="Beach One"
                  className="w-full h-[100%] object-cover transition-transform duration-500 lg:hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Balloon}
          alt="Balloon"
          className="hidden max-lg:block h-[200px] w-[30%] max-sm:h-[150px]"
        />
      </div>

      <Image
        src={Heart}
        alt="Heart"
        className="absolute top-10 right-0 -z-50"
      />
    </div>
  );
}
export default LoveStory;
