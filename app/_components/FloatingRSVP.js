"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function FloatingRSVP() {
  const pathname = usePathname();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", " ");
    }
  };

  return (
    <>
      {pathname !== "#rsvp" && (
        <Link
          href="#rsvp"
          className="fixed bottom-6 right-6 bg-[#9a7e66] text-[30px] text-white px-10 py-3 shadow-lg hover:opacity-80 transition-all duration-300 z-50"
          onClick={(e) => handleScroll(e, "rsvp")}
        >
          RSVP
        </Link>
      )}
    </>
  );
}
export default FloatingRSVP;
