import "./App.css";
import DashboardPortfolio from "./components/DashboardPortfolio";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <DashboardPortfolio />
      <Toaster />
    </div>
  );
}

export default App;
