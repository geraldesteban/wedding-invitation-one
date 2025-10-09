"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function Navigation() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      window.history.replaceState(null, "", " ");
    }
  };

  const navItems = [
    ["HOME", "home"],
    ["ENTOURAGE", "entourage"],
    ["TIMELINE", "timeline"],
    ["ATTIRE", "attire"],
    ["DETAILS", "details"],
    ["FAQS", "faqs"],
    ["LOCATION", "location"],
    ["RSVP", "rsvp"],
  ];

  return (
    <nav className="max-lg:hidden py-3 bg-[#9a7e66] flex flex-col gap-2">
      <h2 className="text-white text-[50px] text-center max-xl:text-[40px] max-lg:text-[30px] max-md:text-[20px]">
        ARIS JHIM & MARY JANE
      </h2>
      <ul
        className={`${cinzel.className} flex justify-center items-center gap-10 text-white`}
      >
        {navItems.map(([label, id]) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="tracking-widest"
              onClick={(e) => handleScroll(e, id)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
