import Link from "next/link";

function Navigation() {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex justify-center items-center gap-10 text-white">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/entourage">ENTOURAGE</Link>
        </li>
        <li>
          <Link href="/weddingtimeline">WEDDING TIMELINE</Link>
        </li>
        <li>
          <Link href="/attireguide">ATTIRE GUIDE</Link>
        </li>
        <li>
          <Link href="/weddingdetails">WEDDING DETAILS</Link>
        </li>
        <li>
          <Link href="/frequentlyaskedquestions">
            FREQUENTLY ASKED QUESTIONS
          </Link>
        </li>
        <li>
          <Link href="/location">LOCATION</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
