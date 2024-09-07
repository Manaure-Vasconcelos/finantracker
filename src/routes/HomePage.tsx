import Accounts from "../components/Accounts";
import AvatarMenu from "../components/AvatarMenu";
import BalanceChart from "../components/BalanceChart";
import BalanceOverview from "../components/BalanceOverview";
import SelectMonth from "../components/SelectMonth";

function HomePage() {
  return (
    <div className="bg-black  text-white min-h-screen w-screen px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-start items-center space-x-28">
          <AvatarMenu />
          <SelectMonth />
        </div>
      </div>

      <BalanceOverview />

      <Accounts />

      <BalanceChart />
    </div>
  );
}

export default HomePage;
