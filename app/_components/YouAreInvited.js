import Image from "next/image";

import Invited from "@/app/_assets/YouAreInvited/Invited.jpg";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function YouAreInvited() {
  return (
    /* You are invited */
    <div className="text-[#8f7563] bg-[#e7e4e2] text-center uppercase">
      <div className="flex flex-col text-[50px] py-20 max-lg:py-10 mx-5 whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
        <span>You are invited</span>
        <span className="whitespace-normal">to the wedding celebration of</span>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src={Invited}
          alt="Invited"
          className="w-full object-cover opacity-50"
          quality={100}
          priority
        />
        <h2
          className={`${cinzel.className} absolute text-[144px] text-center z-50 whitespace-nowrap max-lg:text-[100px] max-md:text-[50px]`}
        >
          ARIS & JANE
        </h2>
      </div>

      <div
        className={`${cinzel.className} flex flex-col gap-10 py-20 max-lg:py-10 max-lg:gap-5`}
      >
        <div className="flex flex-col text-[28px]">
          <span>Sunday, November 16, 2025</span>
          <span>at 4:00 PM</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[21px]">Ceremony and reception at:</span>
          <span className="text-[28px]">The A House</span>
          <span className="text-[28px]">Sitio Mainang, Bamban, Tarlac</span>
        </div>
      </div>
    </div>
  );
}
export default YouAreInvited;
