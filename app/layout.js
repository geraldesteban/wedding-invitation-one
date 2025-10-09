import { Noto_Serif_Display } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import "@/app/_styles/globals.css";
import FloatingRSVP from "./_components/FloatingRSVP";

export const metadata = {
  title: {
    template: "%s / Aris & Jane Wedding",
    default: "Welcome / Aris & Jane Wedding",
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSerifDisplay.className} min-h-screen`}>
        <main>{children}</main>
        <FloatingRSVP />
      </body>
    </html>
  );
}

export default RootLayout;
