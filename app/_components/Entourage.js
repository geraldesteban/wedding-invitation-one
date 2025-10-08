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
    <div className="pt-[105px] max-lg:pt-[103px]">
      {/* TITLE */}
      <div className="bg-[#b6aa9d] p-5 border-b-8 border-t-8 border-[#e7e4e2] max-lg:p-3">
        <h2 className="text-white text-[50px] text-center whitespace-nowrap max-xl:text-[40px] max-lg:text-[30px] max-md:text-[25px]">
          OUR ENTOURAGE
        </h2>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col items-center gap-20 py-10 text-[#8f7563]">
        {/* LASTNAME */}
        <div className="flex items-center gap-5 text-[42px]">
          <span>ESTEBAN</span>
          <span>-</span>
          <span>SIATRIZ</span>
        </div>
        {/* Parents of the Groom and the Bride*/}
        <div className="flex flex-wrap gap-10 max-xl:justify-center">
          {/* Parents of the Groom */}
          <div className="text-center">
            <h2 className="text-[36px]">PARENTS OF THE GROOM</h2>
            <div className="text-[21px]">
              <p className={`${cinzel.className}`}>Adriano Siatriz</p>
              <p className={`${crimsonPro.className}`}>
                (To be represented by: Jhosep Siatriz / Chris John Siatriz)
              </p>
              <p className={`${cinzel.className}`}>Cris Siatriz</p>
            </div>
          </div>
          {/* Parents of the Bride */}
          <div className="text-center">
            <h2 className="text-[36px]">PARENTS OF THE BRIDE</h2>
            <div className={`${cinzel.className} text-[21px]`}>
              <p>Wilfredo Esteban</p>
              <p>Virgie Esteban</p>
            </div>
          </div>
        </div>
        {/* Principal Sponsors */}
        <div>
          <h2 className="text-[36px] text-center">PRINCIPAL SPONSORS</h2>
          <div className={`${cinzel.className}`}>
            <div className="flex gap-20">
              <div className="flex flex-col text-[21px]">
                <span>Edgardo May-at</span>
                <span>Romeo Jaime</span>
              </div>
              <div className="flex flex-col text-[21px]">
                <span>Jean May-at</span>
                <span>Selwin Jaime</span>
              </div>
            </div>
            <p className="text-[30px] text-center">Myra Balaoing</p>
          </div>
        </div>
        {/* Best Man and Maid of Honor */}
        <div className="flex gap-10 max-xl:flex-col">
          {/* Best Man */}
          <div className="text-center">
            <h2 className="text-[36px]">BEST MAN</h2>
            <span className={`${cinzel.className} text-[21px]`}>
              Jan-Jan Siatriz
            </span>
          </div>
          {/* Maid of Honor */}
          <div className="text-center">
            <h2 className="text-[36px]">MAID OF HONOR</h2>
            <span className={`${cinzel.className} text-[21px]`}>
              Mary Joy Esteban
            </span>
          </div>
        </div>
        {/* Groomsmen and Bridesmaids */}
        <div className="flex gap-10 max-xl:flex-col">
          {/* Groomsmen */}
          <div className="text-center">
            <h2 className="text-[36px]">GROOMSMEN</h2>
            <div className={`${cinzel.className} flex flex-col text-[21px]`}>
              <span>Regie Rico Michael</span>
              <span>Oski Alfonso</span>
              <span>Jerico Esteban</span>
              <span>Gerald Esteban</span>
            </div>
          </div>
          {/* Bridesmaids */}
          <div className="text-center">
            <h2 className="text-[36px]">BRIDESMAIDS</h2>
            <div className={`${cinzel.className} flex flex-col text-[21px]`}>
              <span>Jude Ann Siatriz</span>
              <span>Jenny Siatriz Fabro</span>
              <span>Maria Andrea Esteban</span>
              <span>Jaycel Siatriz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entourage;
