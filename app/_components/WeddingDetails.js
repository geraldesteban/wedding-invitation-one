function WeddingDetails() {
  return (
    <div className="bg-[#e7e4e2] uppercase text-[#8f7563] flex flex-col gap-28">
      <div className="p-5 relative">
        <div className="absolute bg-[#ccaf94] h-[110px] w-[700px] left-0 top-0 rounded-br-full rounded-tr-full z-50"></div>
        <div className="absolute bg-[#d8c2b4] h-[110px] w-[720px] left-0 top-5 rounded-br-full rounded-tr-full"></div>
        <h2 className="text-white text-[50px] z-50 absolute whitespace-nowrap">
          OTHER WEDDING DETAILS
        </h2>
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="text-[36px] font-bold py-10">Arrival</h2>
        <p className="text-[30px] w-[80%] mx-auto">
          The ceremony will begin at <span className="font-bold">4:00 PM</span>.
          We kindly ask our guests to arrive at{" "}
          <span className="font-bold">3:00 PM</span> to settle in, find their
          seats, and be fully present for our special moment.
        </p>

        <h2 className="text-[36px] font-bold py-10">Gift</h2>
        <p className="text-[30px] w-[80%] mx-auto">
          Your presence at our wedding is the greatest gift for us. Should you
          wish to bless us more, we would deeply appreciate monetary gifts
          rather than in-kind, as these will help us begin our life together.
        </p>

        <h2 className="text-[36px] font-bold py-10">RSVP</h2>
        <p className="text-[30px] w-[80%] mx-auto">
          Please confirm your attendance on or before October 25, 2025.
        </p>

        <p className="text-[30px] w-[80%] mx-auto">
          Please confirm your attendance on or before October 25, 2025. Kindly
          note that only those who confirm their attendance will be included in
          the final guest list. For us to keep the celebration organized, those
          who are not on the final guest list will not be allowed to enter the
          venue.
        </p>

        <p className="text-[30px] w-[80%] mx-auto">
          Your cooperation in respecting our policy of not bringing uninvited
          guests is sincerely appreciated.
        </p>

        <p className="text-[30px] w-[80%] mx-auto font-bold py-10">
          Please scroll until the end to confirm your attendance.
        </p>
      </div>
    </div>
  );
}
export default WeddingDetails;
