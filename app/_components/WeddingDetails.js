import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function WeddingDetails() {
  return (
    <div className="bg-[#e7e4e2] uppercase text-[#8f7563] flex flex-col gap-5 pt-[104px] pb-28">
      <div className="flex justify-center items-center">
        <div className="flex-1 relative rounded-bl-full rounded-tl-full z-10 w-full">
          <div className="bg-[#ccaf94] rounded-br-full rounded-tr-full absolute h-full w-full -z-5"></div>
          <div className="bg-[#d8c2b4] rounded-br-full rounded-tr-full absolute h-[110px] w-full -z-10 max-xl:h-[90px] max-lg:h-[70px] max-md:h-[60px]"></div>
          <h2 className="text-white text-[50px] text-center z-10 py-2 mx-5 whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
            OTHER WEDDING DETAILS
          </h2>
        </div>
        <div className="flex-1"></div>
      </div>

      {/* Content */}
      <div className="max-lg:mx-5">
        <div
          className={`${cinzel.className} text-center w-[50%] mx-auto max-lg:w-full`}
        >
          <h2 className="text-[25px] font-bold py-10">Arrival</h2>
          <p className="text-[18px]">
            The ceremony will begin at{" "}
            <span className="font-bold">4:00 PM</span>. We kindly ask our guests
            to arrive at <span className="font-bold">3:00 PM</span> to settle
            in, find their seats, and be fully present for our special moment.
          </p>

          <h2 className="text-[25px] font-bold py-10">Gift</h2>
          <p className="text-[18px]">
            Your presence at our wedding is the greatest gift for us. Should you
            wish to bless us more, we would deeply appreciate monetary gifts
            rather than in-kind, as these will help us begin our life together.
          </p>

          <h2 className="text-[25px] font-bold py-10">RSVP</h2>
          <p className="text-[18px] pb-10">
            Please confirm your attendance on or before October 25, 2025. Kindly
            note that only those who confirm their attendance will be included
            in the final guest list. For us to keep the celebration organized,
            those who are not on the final guest list will not be allowed to
            enter the venue.
          </p>
          <p className="text-[18px]">
            Your cooperation in respecting our policy of not bringing uninvited
            guests issincerely appreciated.
          </p>
          {/* <p className="text-[16px] font-bold py-16">
          Please scroll until the end to confirm your attendance.
        </p> */}
        </div>
      </div>
    </div>
  );
}
export default WeddingDetails;
