import { motion } from "framer-motion";

import Image from "next/image";

import SeeYouThereImage from "@/app/_assets/RSVP/SeeYouThere.jpg";
import RSVPForm from "@/app/_components/RSVPForm";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function RSVP() {
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
          className="w-[50%] h-full max-lg:w-full"
          quality={100}
        />
        <div className="text-[#7f523d] uppercase flex flex-col font-light gap-10 max-xl:gap-5 max-xl:mb-10 max-lg:mb-15 mx-10 max-lg:mx-5">
          {/* RSVP DATE */}
          <div className="flex flex-col text-center font-bold">
            <span className="text-5xl max-xl:text-3xl max-md:text-xl">
              Please RSVP by
            </span>
            <span className="text-5xl max-xl:text-3xl max-md:text-xl">
              October 25, 2025
            </span>
          </div>

          <p
            className={`text-justify text-[17px] max-md:text-[12px] ${cinzel.className}`}
          >
            Please confirm your attendance by filling out the form below. Only
            guests who complete this form will be included in the final guest
            list. If we don’t receive your confirmation by October 25, 2025,
            we’ll assume you won’t be able to attend. Please note that any
            uninvited guest who fills out this form will not be included in the
            final guest list.
          </p>

          <RSVPForm />
        </div>
      </div>
    </div>
  );
}
export default RSVP;
