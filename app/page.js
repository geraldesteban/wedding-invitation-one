"use client";

import { useEffect, useRef, useState } from "react";

import Logo from "@/app/_components/Logo";
import Header from "./_components/Navigation/Header";
import Home from "@/app/_components/Sections/Home";
import LoveStory from "@/app/_components/LoveStory";
import YouAreInvited from "@/app/_components/YouAreInvited";
import Entourage from "@/app/_components/Sections/Entourage";
import Timeline from "@/app/_components/Sections/Timeline";
import Attire from "@/app/_components/Sections/Attire";
import Details from "@/app/_components/Sections/Details";
import FAQS from "@/app/_components/Sections/FAQS";
import Location from "@/app/_components/Sections/Location";
import DaysLeft from "@/app/_components/DaysLeft";
import RSVP from "@/app/_components/Sections/RSVP";

function Page() {
  const logoRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!logoRef.current) return;
      const logoBottom = logoRef.current.getBoundingClientRect().bottom;
      setIsSticky(logoBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={logoRef}>
        <Logo />
      </div>

      <div
        className={`w-full fixed top-0 z-100 transition-transform duration-500 ${
          isSticky ? "translate-y-0 shadow-md" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <Home />
      <LoveStory />
      <YouAreInvited />
      <Entourage />
      <Timeline />
      <Attire />
      <Details />
      <FAQS />
      <Location />
      <DaysLeft />
      <RSVP />
    </>
  );
}

export default Page;
