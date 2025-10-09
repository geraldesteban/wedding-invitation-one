import Image from "next/image";

import Filipiniana from "@/app/_assets/filipiniana.png";
import Barong from "@/app/_assets/barong.png";

import Ladies from "@/app/_assets/ladies.png";
import Gentleman from "@/app/_assets/gentleman.png";

import ThemeColor from "@/app/_assets/themeColor.png";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function AttireGuide() {
  return (
    <div className={`${cinzel.className} pt-[104px] pb-16`}>
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3">
        <h2 className="text-white text-[50px] text-center whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
          ATTIRE GUIDE
        </h2>
      </div>
      {/* Content */}
      <div className="text-[#8f7563] py-10">
        <h2 className="text-[25px] text-center mb-10 font-bold mx-5 max-md:mb-5">
          WE KINDLY REQUEST FORMAL ATTIRE.
        </h2>
        {/* Principal Sponsors */}
        <div className="py-10 max-md:py-5">
          <div className="text-center  mx-5">
            <h2 className="text-[21px] max-md:text-[18px] font-bold">
              PRINCIPAL SPONSORS
            </h2>

            <p className="text-[21px] max-md:text-[18px]">
              LONG GOWN / FILIPINIANA
            </p>
            <p className="text-[21px] max-md:text-[18px]">BARONG</p>
          </div>

          <div className="flex justify-center max-lg:flex-wrap">
            <Image src={Filipiniana} alt="Filipiniana" />
            <Image src={Barong} alt="Filipiniana" />
          </div>
        </div>
        {/* Guests */}
        <h2 className="text-[24px] text-center py-10 font-bold mx-5">GUESTS</h2>
        {/* Ladies */}
        <div>
          <div className="text-center mb-10 mx-5 max-md:mb-0">
            <h2 className="text-[21px] max-md:text-[18px] font-bold">LADIES</h2>
            <p className="text-[21px] max-md:text-[18px]">LONG OR MINI DRESS</p>
            <p className="text-[21px] max-md:text-[18px]">
              FORMAL TOP, LONG SKIRTS, SLACKS
            </p>
          </div>

          <Image src={Ladies} alt="Filipiniana" className="block mx-auto" />
        </div>
        {/* Gentleman */}
        <div>
          <div className="text-center mb-10 mx-5 max-md:mb-0 max-md:mt-10">
            <h2 className="text-[21px] max-md:text-[18px] font-bold">
              GENTLEMAN
            </h2>
            <p className="text-[21px] max-md:text-[18px]">
              FORMAL LONG- OR SHORT-SLEEVED POLO
            </p>
            <p className="text-[21px] max-md:text-[18px]">TROUSERS, SLACKS</p>
          </div>

          <Image src={Gentleman} alt="Filipiniana" className="block mx-auto" />
        </div>
        {/* Strictly not allowed */}
        <div>
          <div className="text-center mb-10 mx-5 max-md:mt-10">
            <h2 className="text-[21px] max-md:text-[18px] font-bold">
              STRICTLY NOT ALLOWED
            </h2>
            <p className="text-[21px] max-md:text-[18px] uppercase">
              t-shirts, polo shirts, printed clothes, jeans, shorts, mini skirts
              and slippers
            </p>
          </div>
        </div>
        {/* Kindly wear */}
        <h2 className="text-[21px] max-md:text-[18px] uppercase text-center font-bold  mx-5">
          Kindly wear these colors on our special day.
        </h2>

        <Image src={ThemeColor} alt="Filipiniana" className="block mx-auto" />
      </div>
    </div>
  );
}
export default AttireGuide;
