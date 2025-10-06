import Image from "next/image";

import Filipiniana from "@/app/_assets/filipiniana.png";
import Barong from "@/app/_assets/barong.png";

import Ladies from "@/app/_assets/ladies.png";
import Gentleman from "@/app/_assets/gentleman.png";

import ThemeColor from "@/app/_assets/themeColor.png";

function AttireGuide() {
  return (
    <div>
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2]">
        <h2 className="text-white text-[50px] text-center">ATTIRE GUIDE</h2>
      </div>
      {/* Content */}
      <div className="text-[#8f7563] py-10">
        <h2 className="text-[42px] text-center mb-10">
          WE KINDLY REQUEST FORMAL ATTIRE.
        </h2>
        {/* Principal Sponsors */}
        <div className="py-10">
          <div className="text-center">
            <h2 className="text-[36px]">PRINCIPAL SPONSORS</h2>

            <p className="text-[30px]">LONG GOWN / FILIPINIANA</p>
            <p className="text-[30px]">BARONG</p>
          </div>

          <div className="flex justify-center flex-wrap">
            <Image src={Filipiniana} alt="Filipiniana" />
            <Image src={Barong} alt="Filipiniana" />
          </div>
        </div>
        {/* Guests */}
        <h2 className="text-[36px] text-center py-10">GUESTS</h2>
        {/* Ladies */}
        <div className="py-10">
          <div className="text-center mb-10">
            <h2 className="text-[36px]">LADIES</h2>
            <p className="text-[30px]">LONG OR MINI DRESS</p>
            <p className="text-[30px]">FORMAL TOP, LONG SKIRTS, SLACKS</p>
          </div>

          <Image src={Ladies} alt="Filipiniana" className="block mx-auto" />
        </div>
        {/* Gentleman */}
        <div className="py-10">
          <div className="text-center mb-10">
            <h2 className="text-[36px]">GENTLEMAN</h2>
            <p className="text-[30px]">FORMAL LONG- OR SHORT-SLEEVED POLO</p>
            <p className="text-[30px]">TROUSERS, SLACKS</p>
          </div>

          <Image src={Gentleman} alt="Filipiniana" className="block mx-auto" />
        </div>
        {/* Strictly not allowed */}
        <div className="py-10">
          <div className="text-center mb-10">
            <h2 className="text-[36px]">STRICTLY NOT ALLOWED</h2>
            <p className="text-[30px] uppercase">
              t-shirts, polo shirts, printed clothes, jeans, shorts, mini skirts
              and slippers
            </p>
          </div>
        </div>
        {/* Kindly wear */}
        <h2 className="text-[36px] uppercase py-10 text-center">
          Kindly wear these colors on our special day.
        </h2>

        <Image src={ThemeColor} alt="Filipiniana" className="block mx-auto" />
      </div>
    </div>
  );
}
export default AttireGuide;
