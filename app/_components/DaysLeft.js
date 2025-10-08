"use client";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

import Image from "next/image";
import DaysLeftImage from "@/app/_assets/DaysLeft.png";
import { useCountdown } from "@/app/utils/useCountdown";
import { countdownTarget } from "@/app/utils/coundownTarget";

function DaysLeft() {
  const { days, hours, minutes, seconds } = useCountdown(countdownTarget);

  return (
    <div className="bg-[#e7e4e2]">
      <div className="flex justify-center items-center">
        <div className="flex-1 relative rounded-bl-full rounded-tl-full z-10 w-full">
          <div className="bg-[#ccaf94] rounded-br-full rounded-tr-full absolute h-full w-full -z-5"></div>
          <div className="bg-[#d8c2b4] rounded-br-full rounded-tr-full absolute h-[110px] w-full -z-10 max-xl:h-[90px] max-lg:h-[70px] max-md:h-[50px]"></div>
          <h2 className="text-white text-[50px] text-center z-10 py-2 mx-5 whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px]">
            DAYS LEFT BEFORE WE SAY “I DO”
          </h2>
        </div>
        <div className="flex-1"></div>
      </div>

      {/* CONTENT */}
      <div className="pt-40 pb-28 max-lg:pt-20 max-md:pt-10 max-md:pb-32">
        <div className="relative w-full">
          <div className="mx-5">
            <Image
              src={DaysLeftImage}
              alt="Days Left"
              className="mx-auto rounded-4xl opacity-30"
            />
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-[#8f7563] ${cinzel.className}`}
          >
            <div className="flex gap-10 text-center max-md:gap-5">
              <div className="flex flex-col items-center">
                <span className="text-9xl font-semibold max-md:text-8xl max-sm:text-4xl">
                  {days}
                </span>
                <span className="text-3xl font-semibold max-sm:text-xl">
                  DAYS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-9xl font-semibold max-md:text-8xl max-sm:text-4xl">
                  {hours}
                </span>
                <span className="text-3xl font-bold max-sm:text-xl">HOURS</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-9xl font-semibold max-md:text-8xl max-sm:text-4xl">
                  {minutes}
                </span>
                <span className="text-3xl font-bold max-sm:text-xl">MINS</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-9xl font-semibold max-md:text-8xl max-sm:text-4xl">
                  {seconds}
                </span>
                <span className="text-3xl font-bold max-sm:text-xl">SECS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysLeft;
