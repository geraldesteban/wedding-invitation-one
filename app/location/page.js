import Location from "@/app/_components/Location";
import DaysLeft from "@/app/_components/DaysLeft";

export const metadata = {
  title: "Location",
};

function Page() {
  return (
    <>
      <Location />
      <DaysLeft />
    </>
  );
}

export default Page;
