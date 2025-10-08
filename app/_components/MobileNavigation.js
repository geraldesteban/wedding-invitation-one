"use client";

import Image from "next/image";
import Link from "next/link";
import menu from "@/app/_assets/icon-hamburger.svg";

import { Cinzel } from "next/font/google";
import { useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function MobileNavigation() {
  const [active, setActive] = useState(false);

  const closeMenu = () => setActive(false);

  return (
    <div className="relative flex flex-col items-end">
      <button onClick={() => setActive(!active)}>
        <Image
          src={menu}
          alt="Menu"
          className="hidden max-lg:block py-10 text-[#9a7e66] w-[25px] mr-10"
        />
      </button>
      <div
        className={`bg-[#9a7e66]/80 overflow-hidden transition-all duration-500 ease-in-out ${
          active ? "w-[200px] opacity-100" : "w-[1px] opacity-0"
        }`}
      >
        <ul
          className={`${cinzel.className} flex flex-col gap-5 text-white p-5`}
        >
          {[
            ["HOME", "/"],
            ["ENTOURAGE", "/entourage"],
            ["TIMELINE", "/timeline"],
            ["ATTIRE", "/attire"],
            ["DETAILS", "/details"],
            ["FAQ", "/faq"],
            ["LOCATION", "/location"],
            ["RSVP", "/rsvp"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="tracking-widest" onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MobileNavigation;
