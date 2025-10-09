import Image from "next/image";

import Filipiniana from "@/app/_assets/Attire/filipiniana.png";
import Barong from "@/app/_assets/Attire/barong.png";
import Ladies from "@/app/_assets/Attire/ladies.png";
import Gentleman from "@/app/_assets/Attire/gentleman.png";
import ThemeColor from "@/app/_assets/Attire/themeColor.png";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function Attire() {
  return (
    <div
      id="attire"
      className={`${cinzel.className} scroll-mt-[110px] max-lg:scroll-mt-[0px]`}
    >
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3">
        <h2 className="text-white text-center whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
          ATTIRE GUIDE
        </h2>
      </div>
      {/* Content */}
      <div className="text-[#8f7563] py-20 max-lg:py-10 flex flex-col gap-10">
        <h2 className="text-5xl max-lg:text-3xl max-md:text-xl text-center font-bold">
          WE KINDLY REQUEST FORMAL ATTIRE.
        </h2>
        {/* Principal Sponsors */}
        <div className="text-center mx-5">
          <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
            PRINCIPAL SPONSORS
          </h2>

          <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
            LONG GOWN / FILIPINIANA
          </p>
          <p className="text-3xl max-lg:text-lg max-md:text-[12px]">BARONG</p>
        </div>
        {/* Filipiniana Barong */}
        <div className="flex justify-center items-center">
          <Image
            src={Filipiniana}
            alt="Filipiniana"
            className="max-2xl:w-[50%]"
          />
          <Image src={Barong} alt="Barong" className="max-2xl:w-[50%]" />
        </div>
        {/* Guests */}
        <h2 className="text-5xl max-lg:text-3xl max-md:text-xl text-center font-bold mx-5">
          GUESTS
        </h2>
        {/* Ladies */}
        <div className="text-center mx-5">
          <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
            LADIES
          </h2>
          <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
            LONG OR MIDI DRESS
          </p>
          <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
            FORMAL TOP, LONG SKIRTS, SLACKS
          </p>
        </div>
        <Image src={Ladies} alt="Ladies" className="block mx-auto" />
        {/* Gentleman */}
        <div className="text-center mx-5">
          <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
            GENTLEMAN
          </h2>
          <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
            FORMAL LONG- OR SHORT-SLEEVED POLO
          </p>
          <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
            TROUSERS, SLACKS
          </p>
        </div>
        <Image src={Gentleman} alt="Gentleman" className="block mx-auto" />
        {/* Strictly not allowed */}
        <div>
          <div className="text-center">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              STRICTLY NOT ALLOWED
            </h2>
            <p className="text-3xl max-lg:text-lg max-md:text-[12px] uppercase">
              t-shirts, polo shirts, printed clothes, jeans, shorts, mini skirts
              and slippers
            </p>
          </div>
        </div>
        {/* Kindly wear */}
        <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm uppercase text-center mx-5">
          Kindly wear these colors on our special day.
        </h2>
        <Image src={ThemeColor} alt="ThemeColor" className="block mx-auto" />
      </div>
    </div>
  );
}
export default Attire;
