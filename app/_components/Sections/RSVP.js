"use client";

import { motion } from "framer-motion";

import { useState } from "react";

import Image from "next/image";

import SeeYouThereImage from "@/app/_assets/RSVP/SeeYouThere.jpg";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function SeeYouThere() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter both your first and last name before confirming.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  return (
    <div id="rsvp" className="scroll-mt-[112px] max-lg:scroll-mt-[0px]">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3 mx-auto"
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2 className="text-white text-center whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
            SEE YOU THERE!
          </h2>
        </motion.div>
      </div>
      <div className="flex items-center max-lg:flex-col max-lg:gap-10">
        <Image
          src={SeeYouThereImage}
          alt="See You There"
          className="w-[50%] max-lg:w-full"
          quality={100}
        />
        <div className="text-[#7f523d] uppercase flex flex-col gap-48 mx-auto font-light max-lg:mb-10 max-lg:gap-10">
          {/* RSVP DATE */}
          <div className="flex flex-col text-center">
            <span className="text-[40px] max-lg:text-[30px] max-md:text-[25px]">
              Please RSVP by
            </span>
            <span className="text-[40px] max-lg:text-[30px] max-md:text-[25px]">
              October 25, 2025
            </span>
          </div>

          {/* RSVP INPUTS + BUTTON */}
          <div
            className={`${cinzel.className} flex flex-col items-center gap-6 max-lg:gap-4 max-md:gap-3 max-2xl:mx-20 max-lg:mx-5 max-xl:pb-10`}
          >
            {/* First & Last Name Inputs */}
            <div className="flex gap-5 w-full max-lg:flex-col max-md:gap-2">
              <div className="flex flex-col gap-5 max-lg:gap-2">
                <label className="text-4xl max-xl:text-2xl">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-[#9a7e66] bg-white text-[#7f523d] pl-5 text-1xl max-lg:text-2xl max-md:text-xl py-3 rounded-md outline-none focus:ring-1 focus:ring-[#9a7e66] placeholder:text-[#bda89b] max-md:py-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-5 max-lg:gap-2">
                <label className="text-4xl max-xl:text-2xl">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-[#9a7e66] bg-white text-[#7f523d] pl-5 text-1xl max-lg:text-2xl max-md:text-xl py-3 rounded-md outline-none focus:ring-1 focus:ring-[#9a7e66] placeholder:text-[#bda89b] max-md:py-2"
                  required
                />
              </div>
            </div>

            {/* Error / Confirmation Messages */}
            {error && <p className="text-red-600 text-[15px]">{error}</p>}
            {submitted && !error && (
              <p className="text-green-700 text-[15px]">
                Thank you, {firstName} {lastName}! Your RSVP has been confirmed.
              </p>
            )}

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className="bg-[#9a7e66] w-full text-white py-4 px-10 text-[30px] cursor-pointer rounded-md lg:hover:opacity-80 max-lg:py-3 max-lg:px-8 max-lg:text-[25px] max-md:text-[20px]"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeeYouThere;
