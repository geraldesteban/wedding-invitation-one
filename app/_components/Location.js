import Image from "next/image";

import LocationImage from "@/app/_assets/Location.png";
import LocationBorder from "@/app/_assets/LocationBorder.png";
import LocationIcon from "@/app/_assets/LocationIcon.png";
import QRCode from "@/app/_assets/QRCode.png";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function Location() {
  return (
    <div className="bg-[#e7e4e2] pt-[104px]">
      <div className="flex justify-center items-center">
        <div className="flex-1"></div>
        <div className="flex-1 relative rounded-bl-full rounded-tl-full z-10">
          <div className="bg-[#ccaf94] rounded-bl-full rounded-tl-full absolute h-full w-full -z-5"></div>
          <div className="bg-[#d8c2b4] rounded-bl-full rounded-tl-full absolute h-[110px] w-full -z-10 max-xl:h-[90px] max-lg:h-[70px] max-md:h-[60px]"></div>
          <h2 className="text-white text-[50px] text-center z-10 py-2 whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-lg:mx-10 max-md:text-[25px]">
            GETTING THERE
          </h2>
        </div>
      </div>

      <div className="pt-20 pb-20 max-md:pt-10">
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
          <span className="text-[21px] max-md:text-[20px]">or</span>
          <span className="text-[28px] max-md:text-[25px]">
            scan to get directions
          </span>
        </div>

        <Image
          src={QRCode}
          alt="QRCode"
          className="border-15 rounded-md border-[#ccaf94] mx-auto"
        />
      </div>
    </div>
  );
}
export default Location;
