"use client";

import { Cinzel } from "next/font/google";
import { createRSVP } from "@/app/_lib/action/createRSVP";

import toast from "react-hot-toast";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function RSVPForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const result = await createRSVP(formData);

    if (result.success) {
      toast.success(result.message);

      form.reset();
      hg;
    } else {
      toast.error(result.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${cinzel.className} flex flex-col items-center gap-6 max-lg:gap-4 max-md:gap-3 max-2xl:mx-20 max-lg:mx-5 max-xl:pb-10`}
    >
      {/* First & Last Name Inputs */}
      <div className="flex gap-5 w-full max-lg:flex-col max-md:gap-2">
        <div className="flex flex-col gap-5 max-lg:gap-2">
          <label className="text-4xl max-xl:text-2xl">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            pattern="[A-Za-z\s]+"
            className="w-full border border-[#9a7e66] bg-white text-[#7f523d] pl-5 text-1xl max-lg:text-2xl max-md:text-xl py-3 rounded-md outline-none focus:ring-1 focus:ring-[#9a7e66] placeholder:text-[#bda89b] max-md:py-2"
            required
          />
        </div>
        <div className="flex flex-col gap-5 max-lg:gap-2">
          <label className="text-4xl max-xl:text-2xl">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            pattern="[A-Za-z\s]+"
            className="w-full border border-[#9a7e66] bg-white text-[#7f523d] pl-5 text-1xl max-lg:text-2xl max-md:text-xl py-3 rounded-md outline-none focus:ring-1 focus:ring-[#9a7e66] placeholder:text-[#bda89b] max-md:py-2"
            required
          />
        </div>
      </div>

      {/* Confirm Button */}
      <button
        type="submit"
        className="bg-[#9a7e66] w-full text-white py-4 px-10 text-[30px] cursor-pointer rounded-md lg:hover:opacity-80 max-lg:py-3 max-lg:px-8 max-lg:text-[25px] max-md:text-[20px]"
      >
        Confirm
      </button>
    </form>
  );
}

export default RSVPForm;
