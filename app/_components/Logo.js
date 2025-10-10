import Image from "next/image";

import LogoImage from "@/app/_assets/Logo/A&J.png";

function Logo() {
  return (
    <div id="home" className="bg-[#e7e4e2]">
      <Image src={LogoImage} alt="Logo" className="mx-auto" quality={100} />
    </div>
  );
}
export default Logo;
