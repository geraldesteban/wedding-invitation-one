import Image from "next/image";

import OlsOne from "@/app/_assets/Home/olsOne.jpg";
import OlsTwo from "@/app/_assets/Home/olsTwo.jpg";
import OlsThree from "@/app/_assets/Home/olsThree.jpg";

import { Crimson_Pro } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  style: ["italic"],
});

function Home() {
  return (
    /* ARIS JHIM & MARY JANE WEDDING */
    <main id="home" className="bg-[#e7e4e2] pt-[120px] max-lg:pt-[95px]">
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3">
        <h2 className="text-white text-[50px] text-center whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px]">
          ARIS JHIM & MARY JANE WEDDING
        </h2>
      </div>
      <div className="py-11 max-md:py-5">
        <div className="flex justify-center items-stretch gap-4 mx-10 max-lg:mx-5 max-lg:flex-col">
          <div className="flex-1 overflow-hidden border-4 border-[#b6aa9d] h-[600px]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={OlsOne}
                alt="Ols One"
                className="w-full h-full object-cover transition-transform duration-500 lg:hover:scale-125"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden border-4 border-[#b6aa9d] h-[600px]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={OlsTwo}
                alt="Ols Two"
                className="w-full h-full object-cover transition-transform duration-500 lg:hover:scale-125"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden border-4 border-[#b6aa9d] h-[600px]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={OlsThree}
                alt="Ols Three"
                className="w-full h-full object-cover transition-transform duration-500 lg:hover:scale-125"
              />
            </div>
          </div>
        </div>

        <div className="text-[#8f7563] flex flex-col text-center text-[28px] mt-11 mx-5">
          <span className={`${crimsonPro.className}`}>
            “When the time is right, I, the Lord, will make it happen.”
          </span>
          <span className={`${crimsonPro.className}`}>Isaiah 60:22</span>
        </div>
      </div>
    </main>
  );
}
export default Home;
