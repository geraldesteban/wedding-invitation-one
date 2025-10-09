import Image from "next/image";

import FAQSImage from "@/app/_assets/FAQS/FAQS.png";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function FAQS() {
  return (
    <div
      id="faqs"
      className="uppercase scroll-mt-[104px] max-lg:scroll-mt-[0px]"
    >
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3">
        <h2 className="text-white text-[50px] text-center whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
          Frequently asked Questions
        </h2>
      </div>
      <div className="flex flex-col gap-10 py-20 max-lg:py-10">
        <div className="mx-5">
          <Image src={FAQSImage} alt="FAQ" className="mx-auto" />
        </div>
        <div className="max-lg:mx-5">
          <div
            className={`${cinzel.className} text-[16px] flex flex-col gap-5 text-[#8f7563] w-[800px] mx-auto max-lg:w-[100%]`}
          >
            <h2 className="text-[25px] font-bold">
              Can I take photos and videos?
            </h2>
            <p className="text-[18px]">
              Yes, you may take photos and videos — we’d love for you to capture
              the memories! We kindly ask that you remain in your seat and avoid
              blocking the aisle so that everyone can enjoy the ceremony, and
              our photo and video team can do their best work.
            </p>

            <h2 className="text-[25px] font-bold">
              Can I post on social media during the wedding?
            </h2>
            <p className="text-[18px]">
              We kindly ask that you wait until the day after the wedding before
              sharing photos and videos online. This way, everyone can be fully
              present in the moment and enjoy celebrating with us.
            </p>

            <h2 className="text-[25px] font-bold">
              Can I share this invitation with others?
            </h2>
            <p className="text-[18px]">
              No, please keep this invitation private. We want to keep our
              wedding intimate, with only our invited guests present.
            </p>

            <h2 className="text-[25px] font-bold">
              Is there parking at the venue?
            </h2>
            <p className="text-[18px]">
              Yes, there is ample parking space for all guests inside the venue.
            </p>

            <h2 className="text-[25px] font-bold">
              Can I bring a date or plus one?
            </h2>
            <p className="text-[18px]">
              We truly wish we could celebrate with everyone, but to keep our
              celebration intimate, attendance is limited to the guests we have
              directly invited. If you were given a plus one, we’ll let you know
              personally. Otherwise, we kindly ask that you come solo and
              celebrate with us.
            </p>

            <h2 className="text-[25px] font-bold">Can I bring kids?</h2>
            <p className="text-[18px]">
              We love kids, but for this day, only the children we personally
              invited can come. Thank you for understanding.
            </p>

            <h2 className="text-[25px] font-bold">
              Can I choose where to sit?
            </h2>
            <p className="text-[18px]">
              There will be a seating arrangement for all guests. You will be
              guided in finding your seat to keep the ceremony and reception
              organized and comfortable for everyone.
            </p>

            <h2 className="text-[25px] font-bold">Can I leave early?</h2>
            <p className="text-[18px]">
              Your presence means so much to us. We’d love for you to stay until
              the end of the program and celebrate every moment with us. It
              would be wonderful if you could also join us at the after-party.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQS;
