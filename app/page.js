import Home from "@/app/_components/Home";
import YouAreInvited from "@/app/_components/YouAreInvited";
/* Home page*/
function Page() {
  return (
    <div>
      <Home />
      {/* Our Love Story */}
      <YouAreInvited />
    </div>
  );
}

export default Page;
