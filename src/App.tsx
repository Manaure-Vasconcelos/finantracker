import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./routes/HomePage";
import TransactionsHistory from "./routes/TransactionsHistory";
import AnalyticsDashboard from "./routes/AnalyticsDashboard";
import FinancialGoals from "./routes/FinancialGoals";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="transactions" element={<TransactionsHistory />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="goals" element={<FinancialGoals />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
