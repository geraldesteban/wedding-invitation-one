import { motion } from "framer-motion";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function Details() {
  return (
    <div
      id="details"
      className="bg-[#e7e4e2] uppercase text-[#8f7563] flex flex-col gap-5 scroll-mt-[112px] max-lg:scroll-mt-[0px]"
    >
      <motion.div
        className="relative rounded-bl-full rounded-tl-full z-10 w-full"
        initial={{ width: "1px", opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="bg-[#ccaf94] rounded-br-full rounded-tr-full absolute h-full w-full -z-5"></div>
        <div className="bg-[#d8c2b4] rounded-br-full rounded-tr-full absolute h-[75px] w-full -z-10 max-xl:h-[70px] max-lg:h-[60px] max-md:h-[40px]"></div>
        <h2 className="text-white text-center z-10 py-2 mx-5 whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-sm">
          OTHER WEDDING DETAILS
        </h2>
      </motion.div>

      {/* Content */}
      <div className="max-lg:mx-5 py-20 max-lg:py-10">
        <div
          className={`${cinzel.className} flex flex-col gap-10 max-lg:gap-5 text-center w-[50%] mx-auto max-lg:w-full`}
        >
          <motion.div className="flex flex-col gap-10 max-lg:gap-5">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              Arrival
            </h2>
            <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
              The ceremony will begin at{" "}
              <span className="font-bold">4:00 PM</span>. We kindly ask our
              guests to arrive at <span className="font-bold">3:00 PM</span> to
              settle in, find their seats, and be fully present for our special
              moment.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-10 max-lg:gap-5">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              Gift
            </h2>
            <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
              Your presence at our wedding is the greatest gift for us. Should
              you wish to bless us more, we would deeply appreciate monetary
              gifts rather than in-kind, as these will help us begin our life
              together.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-10 max-lg:gap-5">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              RSVP
            </h2>
            <p className="text-3xl max-lg:text-lg max-md:text-[12px]">
              Please confirm your attendance on or before October 25, 2025.
              Kindly note that only those who confirm their attendance will be
              included in the final guest list. For us to keep the celebration
              organized, those who are not on the final guest list will not be
              allowed to enter the venue.
            </p>
          </motion.div>

          <motion.p className="text-3xl max-lg:text-lg max-md:text-[12px]">
            Your cooperation in respecting our policy of not bringing uninvited
            guests is sincerely appreciated.
          </motion.p>
          <motion.p className="text-3xl max-lg:text-lg max-md:text-[12px] font-bold">
            Please click &quot;rsvp&quot; button or scroll until the end to
            confirm your attendance.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
export default Details;
