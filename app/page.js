import Home from "@/app/_components/Home";
import Entourage from "@/app/_components/Entourage";
import AttireGuide from "@/app/_components/AttireGuide";
import WeddingDetails from "@/app/_components/WeddingDetails";
import YouAreInvited from "@/app/_components/YouAreInvited";
import WeddingTimeline from "./_components/WeddingTimeline";
import FrequentlyAskedQuestions from "./_components/FrequentlyAskedQuestions";
import Location from "@/app/_components/Location";
import DaysLeft from "@/app/_components/DaysLeft";
import SeeYouThere from "./_components/SeeYouThere";

/* Home page*/
function Page() {
  return (
    <div>
      <Home />
      {/* Our Love Story */}
      <YouAreInvited />
      <Entourage />
      <WeddingTimeline />
      <AttireGuide />
      <WeddingDetails />
      <FrequentlyAskedQuestions />
      <Location />
      <DaysLeft />
      <SeeYouThere />
    </div>
  );
}

export default Page;
