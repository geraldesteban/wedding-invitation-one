import { Noto_Serif_Display } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import "@/app/_styles/globals.css";

import FloatingRSVP from "@/app/_components/FloatingRSVP";
import FloatingMusic from "@/app/_components/FloatingMusic";
import MobileNavigation from "@/app/_components/Navigation/MobileNavigation";

import { Toaster } from "react-hot-toast";

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
        {/* <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
              zIndex: 100,
            },
          }}
        /> */}
        <FloatingMusic />
        <FloatingRSVP />
      </body>
    </html>
  );
}

export default RootLayout;
