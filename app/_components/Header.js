import Navigation from "@/app/_components/Navigation";
import MobileNavigation from "./MobileNavigation";

function Header() {
  return (
    <div className="fixed w-full z-100">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
export default Header;
