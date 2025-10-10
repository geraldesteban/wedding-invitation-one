"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

import Invited from "@/app/_assets/YouAreInvited/Invited.jpg";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400", // only weight available
});

import { Pinyon_Script } from "next/font/google";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400", // only weight available
});

function YouAreInvited() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-600%", "650%"]);

  return (
    /* You are invited */
    <div className="text-[#8f7563] bg-[#e7e4e2] text-center uppercase">
      <motion.div
        className="flex flex-col gap-5 mx-5 py-20 whitespace-nowrap max-lg:py-10 text-5xl max-lg:text-3xl max-md:text-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <span>You are invited</span>
        <span className="whitespace-normal">to the wedding celebration of</span>
      </motion.div>

      <div
        ref={ref}
        className="relative flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ scale }} className="w-full">
          <Image
            src={Invited}
            alt="Invited"
            className="w-full object-cover opacity-50"
            quality={100}
            priority
          />
        </motion.div>

        <motion.h2
          style={{ y }}
          className={`${cinzel.className} absolute text-[200px] text-center z-50 whitespace-nowrap max-lg:text-[100px] max-md:text-[50px]`}
        >
          ARIS & JANE
        </motion.h2>
      </div>

      <motion.div
        className={`${cinzel.className} flex flex-col gap-10 py-20 max-lg:py-10 max-lg:gap-5`}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col">
          <p className="text-3xl max-lg:text-xl max-md:text-lg">
            Sunday, November 16, 2025
          </p>
          <p className="text-3xl max-lg:text-xl max-md:text-lg">at 4:00 PM</p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl max-lg:text-lg max-md:text-sm">
            Ceremony and reception at:
          </p>
          <p className="text-3xl max-lg:text-xl max-md:text-lg">The A House</p>
          <p className="text-3xl max-lg:text-xl max-md:text-lg">
            Sitio Mainang, Bamban, Tarlac
          </p>
        </div>
      </motion.div>
    </div>
  );
}
export default YouAreInvited;
