import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import "./App.css";
import Accounts from "./components/Accounts";
import BalanceChart from "./components/BalanceChart";
import BalanceOverview from "./components/BalanceOverview";
import NavMobile from "./components/NavMobile";

function App() {
  return (
    <div className="bg-black text-white min-h-screen w-screen px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Avatar className='w-10 h-10 rounded-full'>
            <AvatarImage src="https://github.com/shadcn.png" alt="profile" className='rounded-full' />
            <AvatarFallback>MV</AvatarFallback>
          </Avatar>
          <div className="ml-2">Septiembre</div>
        </div>
      </div>

      <BalanceOverview />

      <Accounts />

      <BalanceChart />

      <NavMobile />
    </div>
  );
}

export default App;
