import "./App.css";
import Accounts from "./components/Accounts";
import BalanceChart from "./components/BalanceChart";
import BalanceOverview from "./components/BalanceOverview";
import NavMobile from "./components/NavMobile";
import AvatarMenu from "./components/AvatarMenu";
import SelectMonth from "./components/SelectMonth";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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

        <NavMobile />
      </div>
    </ThemeProvider>
  );
}

export default App;
