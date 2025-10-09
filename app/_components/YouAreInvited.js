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
      <div className="flex flex-col gap-5 text-6xl mx-5 py-20 whitespace-nowrap max-lg:py-10 max-lg:text-3xl max-md:text-xl">
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
          <p className="text-3xl max-md:text-xl">Sunday, November 16, 2025</p>
          <p className="text-3xl max-md:text-xl">at 4:00 PM</p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl max-md:text-lg">Ceremony and reception at:</p>
          <p className="text-3xl max-md:text-xl">The A House</p>
          <p className="text-3xl max-md:text-xl">
            Sitio Mainang, Bamban, Tarlac
          </p>
        </div>
      </div>
    </div>
  );
}
export default YouAreInvited;
