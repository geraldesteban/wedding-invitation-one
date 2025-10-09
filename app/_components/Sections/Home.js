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
        <h2 className="text-white text-center whitespace-nowrap text-6xl max-lg:text-3xl max-md:text-xl">
          ARIS JHIM & MARY JANE WEDDING
        </h2>
      </div>
      <div className="py-10 max-md:py-2">
        <div className="flex justify-center items-stretch gap-4 mx-40 max-lg:mx-5">
          {[OlsOne, OlsTwo, OlsThree].map((img, idx) => (
            <div
              key={idx}
              className="flex-1 border-4 border-[#b6aa9d] overflow-hidden relative aspect-[2/3]"
            >
              <Image
                src={img}
                alt={`Ols ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 lg:hover:scale-125"
                fill
              />
            </div>
          ))}
        </div>

        <div className="text-[#8f7563] flex flex-col text-center mt-11 mx-5 max-md:mt-2 text-3xl max-md:text-sm">
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
