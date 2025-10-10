import { Noto_Serif_Display } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import "@/app/_styles/globals.css";
import FloatingRSVP from "./_components/FloatingRSVP";
import MobileNavigation from "./_components/Navigation/MobileNavigation";

export const metadata = {
  title: {
    template: "%s / Aris & Jane Wedding",
    default: "Welcome / Aris & Jane Wedding",
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifDisplay.className} min-h-screen relative w-full overflow-x-hidden`}
      >
        <div className="fixed top-0 right-0 z-100">
          <MobileNavigation />
        </div>
        <main>{children}</main>
        <FloatingRSVP />
      </body>
    </html>
  );
}

export default RootLayout;
