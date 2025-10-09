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
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default Page;
