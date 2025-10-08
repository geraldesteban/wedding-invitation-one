"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function FloatingRSVP() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/rsvp" && (
        <Link
          href="/rsvp"
          className="fixed bottom-6 right-6 bg-[#9a7e66] text-[30px] text-white px-10 py-3 shadow-lg hover:opacity-80 transition-all duration-300 z-50"
        >
          RSVP
        </Link>
      )}
    </>
  );
}
export default FloatingRSVP;
