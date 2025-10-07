import Image from "next/image";

import Invited from "@/app/_assets/Invited.jpg";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function YouAreInvited() {
  return (
    /* You are invited */
    <div className="text-[#8f7563] bg-[#e7e4e2] text-center py-10 uppercase">
      <div className="flex flex-col text-[48px] py-5">
        <span>You are invited</span>
        <span>to the wedding celebration of</span>
      </div>
      <div className="relative flex items-center justify-center py-5">
        <Image
          src={Invited}
          alt="Invited"
          className="w-full h-auto object-cover opacity-70"
          quality={100}
          priority
        />
        <h2 className={`absolute text-[144px] text-center z-50`}>
          ARIS & JANE
        </h2>
      </div>

      <div className={`${cinzel.className}`}>
        <div className="flex flex-col text-[28px] py-5">
          <span>Sunday, November 16, 2025</span>
          <span>at 4:00 PM</span>
        </div>
        <div className="flex flex-col py-5">
          <span className="text-[21px]">Ceremony and reception at:</span>
          <span className="text-[28px]">The A House</span>
          <span className="text-[28px]">Sitio Mainang, Bamban, Tarlac</span>
        </div>
      </div>
    </div>
  );
}
export default YouAreInvited;
