import { motion } from "framer-motion";

import Image from "next/image";

import SeeYouThereImage from "@/app/_assets/RSVP/SeeYouThere.jpg";
import RSVPForm from "@/app/_components/RSVPForm";

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

          <RSVPForm />
        </div>
      </div>
    </div>
  );
}
export default RSVP;
