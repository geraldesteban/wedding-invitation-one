import { motion } from "framer-motion";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

import { Crimson_Pro } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  style: ["italic"],
});

function Entourage() {
  return (
    <div id="entourage" className="scroll-mt-[110px] max-lg:scroll-mt-[0px]">
      {/* TITLE */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3 mx-auto"
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
          }}
        >
          <h2 className="text-white text-center whitespace-nowrap text-5xl max-lg:text-3xl max-md:text-xl">
            OUR ENTOURAGE
          </h2>
        </motion.div>
      </div>

      {/* CONTENT */}
      <motion.div
        className="flex flex-col gap-10 py-20 max-lg:gap-5 max-lg:py-10 mx-1"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {/* Bride and Groom */}
        <div className="flex justify-center items-center text-[#8f7563]">
          <div className="font-bold text-6xl max-lg:text-3xl max-md:text-xl text-right">
            <h2>ESTEBAN</h2>
          </div>
          <h2 className="font-bold text-5xl max-lg:text-2xl max-md:text-lg">
            -
          </h2>
          <div className="font-bold text-6xl max-lg:text-3xl max-md:text-xl">
            <p>SIATRIZ</p>
          </div>
        </div>

        {/* Parents of the Groom and Bride */}
        <div className="flex justify-center gap-10 max-md:gap-3 text-[#8f7563]">
          <div className="flex flex-col gap-2 text-right flex-1 max-md:gap-1">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              PARENTS OF THE GROOM
            </h2>
            <div className="flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-[12px] max-md:gap-1">
              <p className={`${cinzel.className}`}>Adriano Siatriz</p>
              <p
                className={`${crimsonPro.className} text-xl max-lg:text-[10px] max-md:text-[8px]`}
              >
                (To be represented by: Jhosep Siatriz / Chris John Siatriz)
              </p>
              <p className={`${cinzel.className}`}>Cris Siatriz</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 max-md:gap-1">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              PARENTS OF THE BRIDE
            </h2>
            <div
              className={`${cinzel.className} flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-[12px] max-md:gap-1`}
            >
              <p>Wilfredo Esteban</p>
              <p>Virgie Esteban</p>
            </div>
          </div>
        </div>

        {/* Principal Sponsors */}
        <div className="flex flex-col gap-2 text-[#8f7563] max-md:gap-1">
          <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm text-center">
            PRINCIPAL SPONSORS
          </h2>

          <div className="flex justify-center gap-10 max-md:gap-3 text-[#8f7563]">
            <div className="flex flex-col gap-2 text-right flex-1 max-md:gap-1">
              <div
                className={`${cinzel.className} flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-[12px]`}
              >
                <p>Edgardo May-at</p>
                <p>Romeo Jaime</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1 max-md:gap-1">
              <div
                className={`${cinzel.className} flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-[12px]`}
              >
                <p>Jean May-at</p>
                <p>Selwin Jaime</p>
              </div>
            </div>
          </div>
          <p
            className={`${cinzel.className} flex flex-col gap-2 text-3xl max-lg:text-lg max-md:text-[12px] text-center`}
          >
            Myra balaoing
          </p>
        </div>

        {/* Best Man and Maid of Honor */}
        <div className="flex justify-center gap-10 max-md:gap-3 text-[#8f7563] ">
          {/* Best Man */}
          <div className="flex flex-col gap-2 text-right flex-1 max-md:gap-1">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              BEST MAN
            </h2>
            <p
              className={`${cinzel.className} text-3xl max-lg:text-lg max-md:text-[12px]`}
            >
              Jan-Jan Siatriz
            </p>
          </div>

          {/* Maid of Honor */}
          <div className="flex flex-col gap-2 flex-1 max-md:gap-1">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              MAID OF HONOR
            </h2>
            <p
              className={`${cinzel.className} text-3xl max-lg:text-lg max-md:text-[12px]`}
            >
              Mary Joy Esteban
            </p>
          </div>
        </div>

        {/* Groomsmen and Bridesmaids */}
        <div className="flex justify-center gap-10 max-md:gap-3 text-[#8f7563]">
          {/* Groomsmen */}
          <div className="flex flex-col gap-2 text-right flex-1 max-md:gap-1">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              GROOMSMEN
            </h2>
            <div
              className={`${cinzel.className} flex flex-col text-3xl max-lg:text-lg max-md:text-[12px]`}
            >
              <span>Regie Rico</span>
              <span>MICHAEL Oski Alfonso</span>
              <span>Jerico Esteban</span>
              <span>Gerald Esteban</span>
            </div>
          </div>

          {/* Bridesmaids */}
          <div className="flex flex-col gap-2 flex-1 max-md:gap-1">
            <h2 className="font-bold text-4xl max-lg:text-2xl max-md:text-sm">
              BRIDESMAIDS
            </h2>
            <div
              className={`${cinzel.className} flex flex-col text-3xl max-lg:text-lg max-md:text-[12px]`}
            >
              <span>Jude Ann Siatriz</span>
              <span>Jenny Siatriz Fabro</span>
              <span>Maria Andrea Esteban</span>
              <span>Jaycel Siatriz</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Entourage;
