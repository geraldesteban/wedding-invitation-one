import { motion } from "framer-motion";

import Image from "next/image";

import Timeline from "@/app/_assets/Timeline/Timeline.png";
import TimelineOne from "@/app/_assets/Timeline/TimelineOne.jpg";
import TimelineTwo from "@/app/_assets/Timeline/TimelineTwo.jpg";

function WeddingTimeline() {
  return (
    <div
      id="timeline"
      className="bg-[#e7e4e2] scroll-mt-[112px] max-lg:scroll-mt-[0px]"
    >
      <div className="relative w-full overflow-x-clip">
        <div className="flex justify-end w-full">
          <motion.div
            className="relative rounded-bl-full rounded-tl-full z-10"
            initial={{ width: "1px", opacity: 0 }}
            whileInView={{ width: "80%", opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className="bg-[#ccaf94] rounded-bl-full rounded-tl-full absolute inset-0 -z-5"></div>
            <div className="bg-[#d8c2b4] rounded-bl-full rounded-tl-full absolute inset-0 h-[75px] -z-10 max-xl:h-[90px] max-lg:h-[70px] max-md:h-[50px]"></div>
            <h2 className="text-white text-center z-10 py-2 whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
              WEDDING TIMELINE
            </h2>
          </motion.div>
        </div>
      </div>

      <Image
        src={Timeline}
        alt="Wedding Timeline"
        quality={80}
        className="w-[85%] mx-auto max-sm:pt-5 max-lg:w-[100%]"
      />
      <div className="flex w-full max-lg:flex-col">
        <Image
          src={TimelineOne}
          alt="Timeline One"
          className="w-[50%] max-lg:w-[100%]"
        />
        <Image
          src={TimelineTwo}
          alt="Timeline Two"
          className="w-[50%] max-lg:w-[100%]"
        />
      </div>
    </div>
  );
}
export default WeddingTimeline;
