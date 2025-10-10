import { motion } from "framer-motion";

import Image from "next/image";

import LocationBorder from "@/app/_assets/Location/LocationBorder.png";
import LocationIcon from "@/app/_assets/Location/LocationIcon.png";
import QRCode from "@/app/_assets/Location/QRCode.png";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function Location() {
  return (
    <div
      id="location"
      className="bg-[#e7e4e2] scroll-mt-[112px] max-lg:scroll-mt-[0px]"
    >
      <div className="relative w-full [overflow-x:hidden] overflow-x-clip">
        <div className="flex justify-end w-full">
          <motion.div
            className="relative rounded-bl-full rounded-tl-full z-10"
            initial={{ width: "1px", opacity: 0 }}
            whileInView={{ width: "80%", opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className="bg-[#ccaf94] rounded-bl-full rounded-tl-full absolute inset-0 -z-5"></div>
            <div className="bg-[#d8c2b4] rounded-bl-full rounded-tl-full absolute inset-0 h-[75px] -z-10 max-xl:h-[70px] max-lg:h-[60px] max-md:h-[50px]"></div>
            <h2 className="text-white text-center z-10 py-2 whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
              GETTING THERE
            </h2>
          </motion.div>
        </div>
      </div>
      <div className="py-20 max-lg:py-10">
        <Image
          src={LocationIcon}
          alt="Location Icon"
          quality={100}
          className="mx-auto pb-10"
        />
        <div className="flex items-center justify-center mx-5">
          <div className="relative inline-block">
            <Image
              src={LocationBorder}
              alt="Location Border"
              className="block w-full max-w-[900px]"
              quality={100}
            />

            <a
              href="https://www.google.com/maps/place/7G5F%2B86W+A-house+Bamban,+Bamban,+Tarlac/@15.2583625,120.5230781,16z/data=!4m6!3m5!1s0x3396933836c8b9d9:0xd68df8852f47a2e3!8m2!3d15.2583625!4d120.5230781!16s%2Fg%2F11fl__kmy_?g_ep=Eg1tbF8yMDI1MTAwMl8wIJvbDyoASAJQAg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[97%] h-[96%] overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.224984579906!2d120.52088921645964!3d15.258362508002252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396933836c8b9d9%3A0xd68df8852f47a2e3!2sA-house%2C%20Bamban%2C%20Tarlac!5e0!3m2!1sen!2sph!4v1696812345678!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </div>
        <div
          className={`${cinzel.className} flex flex-col gap-5 py-10 uppercase text-[#8f7563] text-center font-bold mx-5`}
        >
          <span className="text-3xl max-lg:text-lg max-md:text-[12px]">or</span>
          <span className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
            scan to get directions
          </span>
        </div>

        <Image
          src={QRCode}
          alt="QRCode"
          className="border-15 rounded-md border-[#ccaf94] mx-auto"
          quality={100}
        />
      </div>
    </div>
  );
}
export default Location;
