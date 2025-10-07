import Image from "next/image";

import DaysLeftImage from "@/app/_assets/DaysLeft.png";

function DaysLeft() {
  return (
    <div className="bg-[#e7e4e2]">
      <div className="p-5 relative">
        <div className="absolute bg-[#ccaf94] h-[110px] w-[45%] left-0 top-0 rounded-br-full rounded-tr-full z-50"></div>
        <div className="absolute bg-[#d8c2b4] h-[110px] w-[45%] left-0 top-5 rounded-br-full rounded-tr-full"></div>
        <h2 className="text-white text-[50px] z-50 absolute whitespace-nowrap">
          DAYS LEFT BEFORE WE SAY “I DO”
        </h2>
      </div>
      <div className="pt-56 pb-28 relative">
        <Image
          src={DaysLeftImage}
          alt="Days Left"
          className="mx-auto rounded-4xl opacity-50"
        />
      </div>
    </div>
  );
}
export default DaysLeft;
