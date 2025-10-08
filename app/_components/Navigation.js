import Link from "next/link";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});

function Navigation() {
  return (
    <nav className="max-lg:hidden py-10 bg-[#b6aa9d]">
      <ul
        className={`${cinzel.className} flex justify-center items-center gap-10 text-white`}
      >
        <li>
          <Link href="/" className="tracking-widest">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/entourage" className="tracking-widest">
            ENTOURAGE
          </Link>
        </li>
        <li>
          <Link href="/timeline" className="tracking-widest">
            TIMELINE
          </Link>
        </li>
        <li>
          <Link href="/attire" className="tracking-widest">
            ATTIRE
          </Link>
        </li>
        <li>
          <Link href="/details" className="tracking-widest">
            DETAILS
          </Link>
        </li>
        <li>
          <Link href="/faq" className="tracking-widest">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/location" className="tracking-widest">
            LOCATION
          </Link>
        </li>
        <li>
          <Link href="/rsvp" className="tracking-widest">
            RSVP
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
