"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import DaysLeftImage from "@/app/_assets/DaysLeft/DaysLeft.png";
import { useCountdown } from "@/app/utils/useCountdown";
import { countdownTarget } from "@/app/utils/coundownTarget";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function DaysLeft() {
  const { days, hours, minutes, seconds } = useCountdown(countdownTarget);

  return (
    <div className="bg-[#e7e4e2]">
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
        <div className="bg-[#d8c2b4] rounded-br-full rounded-tr-full absolute h-[75px] w-full -z-10 max-xl:h-[70px] max-lg:h-[60px] max-md:h-[40px]"></div>
        <h2 className="text-white text-center z-10 py-2 whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-sm">
          DAYS LEFT BEFORE WE SAY “I DO”
        </h2>
      </motion.div>

      {/* CONTENT */}
      <div className="py-20 max-lg:py-10">
        <div className="relative w-full">
          <div className="mx-5">
            <Image
              src={DaysLeftImage}
              alt="Days Left"
              className="mx-auto rounded-4xl opacity-30"
              quality={100}
            />
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-[#8f7563] ${cinzel.className}`}
          >
            <div className="flex justify-center items-end text-center">
              {/* DAYS */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                  {days}
                  <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                    :
                  </span>
                </span>
                <span className="text-3xl max-sm:text-lg">DAYS</span>
              </div>
              {/* HOURS */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                  {hours}
                  <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                    :
                  </span>
                </span>
                <span className="text-3xl max-sm:text-lg">HOURS</span>
              </div>
              {/* MINUTES */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                  {minutes}
                  <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                    :
                  </span>
                </span>
                <span className="text-3xl max-sm:text-lg">MINS</span>
              </div>
              {/* SECONDS */}
              <div className="flex flex-col gap-1 items-center">
                <span className="text-9xl font-semibold leading-none max-md:text-8xl max-sm:text-5xl">
                  {seconds}
                </span>
                <span className="text-3xl max-sm:text-lg">SECS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysLeft;
