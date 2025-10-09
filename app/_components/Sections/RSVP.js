"use client";
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
    <div className="scroll-mt-[104px] max-lg:scroll-mt-[0px]">
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3">
        <h2 className="text-white text-[50px] text-center whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
          SEE YOU THERE!
        </h2>
      </div>
      <div className="flex items-center max-lg:flex-col max-lg:gap-10">
        <Image
          src={SeeYouThereImage}
          alt="See You There"
          className="w-[50%] max-lg:w-full"
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
            id="rsvp"
            className={`${cinzel.className} flex flex-col items-center gap-6 max-lg:gap-4 max-2xl:mx-20 max-lg:mx-5`}
          >
            {/* First & Last Name Inputs */}
            <div className="flex gap-5 w-full max-lg:flex-col">
              <div className="flex flex-col gap-5">
                <label className="text-[#8f7563] text-[20px]">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-[#9a7e66] bg-white text-[#7f523d] pl-5 text-[20px] py-3 rounded-md outline-none focus:ring-1 focus:ring-[#9a7e66] placeholder:text-[#bda89b]"
                  required
                />
              </div>
              <div className="flex flex-col gap-5">
                <label className="text-[#8f7563] text-[20px]">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-[#9a7e66] bg-white text-[#7f523d] pl-5 text-[20px] py-3 rounded-md outline-none focus:ring-1 focus:ring-[#9a7e66] placeholder:text-[#bda89b]"
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
