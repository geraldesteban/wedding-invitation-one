import Navigation from "@/app/_components/Navigation/Navigation";
import MobileNavigation from "@/app/_components/Navigation/MobileNavigation";

function Header() {
  return (
    <div className="fixed w-full z-100">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
export default Header;
