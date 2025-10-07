import Image from "next/image";
import Timeline from "@/app/_assets/timeline.png";

import TimelineOne from "@/app/_assets/TimelineOne.png";
import TimelineTwo from "@/app/_assets/TimelineTwo.png";

function WeddingTimeline() {
  return (
    <div className="bg-[#e7e4e2]">
      <div className="p-5 relative">
        <div className="absolute bg-[#ccaf94] h-[110px] w-[40%] right-0 top-0 rounded-bl-full rounded-tl-full z-50"></div>
        <div className="absolute bg-[#d8c2b4] h-[110px] w-[40%] right-0 top-5 rounded-bl-full rounded-tl-full"></div>
        <h2 className="text-white text-[50px] z-50 absolute whitespace-nowrap right-10">
          WEDDING TIMELINE
        </h2>
      </div>
      <Image
        src={Timeline}
        alt="Wedding Timeline"
        quality={80}
        className="w-full pt-20"
      />
      <div className="flex w-full">
        <Image src={TimelineOne} alt="Timeline One" className="flex-1" />
        <Image src={TimelineTwo} alt="Timeline Two" className="flex-1" />
      </div>
    </div>
  );
}
export default WeddingTimeline;
