import Image from "next/image";

import OlsOne from "@/app/_assets/olsOne.png";
import OlsTwo from "@/app/_assets/olsTwo.png";
import OlsThree from "@/app/_assets/olsThree.png";

import { Crimson_Pro } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  style: ["italic"],
});

function Home() {
  return (
    /* ARIS JHIM & MARY JANE WEDDING */
    <main className="bg-[#e7e4e2]">
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2]">
        <h2 className="text-white text-[50px] text-center">
          ARIS JHIM & MARY JANE WEDDING
        </h2>
      </div>
      <div className="py-16">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={OlsOne}
            alt="Ols One"
            className="border-5 border-[#b6aa9d]"
          />
          <Image
            src={OlsTwo}
            alt="Ols Two"
            className="border-5 border-[#b6aa9d]"
          />
          <Image
            src={OlsThree}
            alt="Ols Three"
            className="border-5 border-[#b6aa9d]"
          />
        </div>
        <div className="text-[#8f7563] flex flex-col text-center text-[28px] mt-10">
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
