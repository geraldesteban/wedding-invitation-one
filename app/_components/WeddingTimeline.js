import Image from "next/image";
import Timeline from "@/app/_assets/timeline.png";

import TimelineOne from "@/app/_assets/TimelineOne.jpg";
import TimelineTwo from "@/app/_assets/TimelineTwo.jpg";

function WeddingTimeline() {
  return (
    <div className="bg-[#e7e4e2] pt-[104px]">
      <div className="flex justify-center items-center">
        <div className="flex-1"></div>
        <div className="flex-1 relative rounded-bl-full rounded-tl-full z-10">
          <div className="bg-[#ccaf94] rounded-bl-full rounded-tl-full absolute h-full w-full -z-5"></div>
          <div className="bg-[#d8c2b4] rounded-bl-full rounded-tl-full absolute h-[110px] w-full -z-10 max-xl:h-[90px] max-lg:h-[70px] max-md:h-[60px]"></div>
          <h2 className="text-white text-[50px] text-center z-10 py-2 whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-lg:mx-10 max-md:text-[25px]">
            WEDDING TIMELINE
          </h2>
        </div>
      </div>

      <Image
        src={Timeline}
        alt="Wedding Timeline"
        quality={80}
        className="w-[80%] mx-auto max-sm:pt-5"
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
