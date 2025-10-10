import { motion } from "framer-motion";

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
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3 mx-auto"
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
          }}
        >
          <h2 className="text-white text-center whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
            ATTIRE GUIDE
          </h2>
        </motion.div>
      </div>
      {/* Content */}
      <div className="text-[#8f7563] py-20 max-lg:py-10 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl max-lg:text-3xl max-md:text-xl text-center font-bold">
            WE KINDLY REQUEST FORMAL ATTIRE.
          </h2>
        </motion.div>
        {/* Principal Sponsors */}
        <motion.div
          className="text-center mx-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl max-lg:text-2xl max-md:text-sm">
            PRINCIPAL SPONSORS
          </h2>

          <p className="text-2xl max-lg:text-lg max-md:text-[12px]">
            LONG GOWN / FILIPINIANA
          </p>
          <p className="text-2xl max-lg:text-lg max-md:text-[12px]">BARONG</p>
        </motion.div>
        {/* Filipiniana Barong */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={Filipiniana}
            alt="Filipiniana"
            className="max-2xl:w-[50%]"
            quality={100}
          />
          <Image
            src={Barong}
            alt="Barong"
            className="max-2xl:w-[50%]"
            quality={100}
          />
        </motion.div>
        {/* Guests */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl max-lg:text-3xl max-md:text-xl text-center font-bold mx-5">
            GUESTS
          </h2>
        </motion.div>
        {/* Ladies */}
        <motion.div
          className="text-center mx-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl max-lg:text-2xl max-md:text-sm">
            LADIES
          </h2>
          <p className="text-2xl max-lg:text-lg max-md:text-[12px]">
            LONG OR MIDI DRESS
          </p>
          <p className="text-2xl max-lg:text-lg max-md:text-[12px]">
            FORMAL TOP, LONG SKIRTS, SLACKS
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={Ladies}
            alt="Ladies"
            className="block mx-auto"
            quality={100}
          />
        </motion.div>

        {/* Gentleman */}
        <motion.div
          className="text-center mx-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl max-lg:text-2xl max-md:text-sm">
            GENTLEMAN
          </h2>
          <p className="text-2xl max-lg:text-lg max-md:text-[12px]">
            FORMAL LONG- OR SHORT-SLEEVED POLO
          </p>
          <p className="text-2xl max-lg:text-lg max-md:text-[12px]">
            TROUSERS, SLACKS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={Gentleman}
            alt="Gentleman"
            className="block mx-auto"
            quality={100}
          />
        </motion.div>
        {/* Strictly not allowed */}
        <div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold text-3xl max-lg:text-2xl max-md:text-sm">
              STRICTLY NOT ALLOWED
            </h2>
            <p className="text-2xl max-lg:text-lg max-md:text-[12px] uppercase">
              t-shirts, polo shirts, printed clothes, jeans, shorts, mini skirts
              and slippers
            </p>
          </motion.div>
        </div>
        {/* Kindly wear */}
        <motion.h2
          className="font-bold text-3xl max-lg:text-2xl max-md:text-sm uppercase text-center mx-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Kindly wear these colors on our special day.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={ThemeColor}
            alt="ThemeColor"
            className="block mx-auto"
            quality={100}
          />
        </motion.div>
      </div>
    </div>
  );
}
export default Attire;
