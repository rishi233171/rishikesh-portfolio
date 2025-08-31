import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import DashboardPortfolio from "./components/DashboardPortfolio";
import { Toaster } from "./components/ui/toaster";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.log("API not available, using mock data");
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <DashboardPortfolio />
      <Toaster />
    </div>
  );
}

export default App;
