import Accounts from "../components/Accounts";
import BalanceChart from "../components/BalanceChart";
import BalanceOverview from "../components/BalanceOverview";

function HomePage() {
  return (
    <div className="bg-black  text-white min-h-screen w-screen">
      <BalanceOverview />
      <div className="px-4 mt-5 flex flex-col gap-5">
        <Accounts />

        <BalanceChart />
      </div>
    </div>
  );
}

export default HomePage;
