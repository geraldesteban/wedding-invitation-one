import Image from "next/image";

import SeeYouThereImage from "@/app/_assets/SeeYouThere.jpg";

function SeeYouThere() {
  return (
    <div>
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2]">
        <h2 className="text-white text-[50px] text-center">SEE YOU THERE!</h2>
      </div>
      <div className="flex items-center">
        <Image src={SeeYouThereImage} alt="See You There" className="w-[50%]" />
        <div className="text-[#7f523d] uppercase flex flex-col gap-48 mx-auto font-light">
          <div className="flex flex-col text-center">
            <span className="text-[40px]">Please RSVP by</span>
            <span className="text-[40px]">October 25, 2025</span>
          </div>
          <button className="bg-[#9a7e66] text-white py-5 text-[40px] cursor-pointer lg:hover:opacity-80">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}
export default SeeYouThere;
