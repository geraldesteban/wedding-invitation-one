"use client";

import Image from "next/image";
import Link from "next/link";

import menu from "@/app/_assets/Menu/icon-hamburger.svg";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function MobileNavigation() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = () => setActive(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    closeMenu();

    if (href.startsWith("#")) {
      const section = document.getElementById(href.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        window.history.replaceState(null, "", pathname);
      }
    } else {
      router.push(href);
    }
  };

  const navItems = [
    ["HOME", "#home"],
    ["LOVE STORY", "#lovestory"],
    ["ENTOURAGE", "#entourage"],
    ["TIMELINE", "#timeline"],
    ["ATTIRE", "#attire"],
    ["DETAILS", "#details"],
    ["FAQ", "#faqs"],
    ["LOCATION", "#location"],
    ["RSVP", "#rsvp"],
  ];

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
          {navItems.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="tracking-widest"
                onClick={(e) => handleNav(e, href)}
              >
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
