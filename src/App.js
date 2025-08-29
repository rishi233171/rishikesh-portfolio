Absolutely! Here are the 3 files displayed separately for easy copying:

## **📁 File 1: `src/App.js`**
Action: file_editor view /tmp/complete_App.js
Observation: /tmp/complete_App.js:
1|import { useEffect } from "react";
2|import "./App.css";
3|import { BrowserRouter, Routes, Route } from "react-router-dom";
4|import axios from "axios";
5|import DashboardPortfolio from "./components/DashboardPortfolio";
6|import { Toaster } from "./components/ui/toaster";
7|
8|const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
9|const API = `${BACKEND_URL}/api`;
10|
11|const Home = () => {
12|  const helloWorldApi = async () => {
13|    try {
14|      const response = await axios.get(`${API}/`);
15|      console.log(response.data.message);
16|    } catch (e) {
17|      console.error(e, `errored out requesting / api`);
18|    }
19|  };
20|
21|  useEffect(() => {
22|    helloWorldApi();
23|  }, []);
24|
25|  return <DashboardPortfolio />;
26|};
27|
28|function App() {
29|  return (
30|    <div className="App">
31|      <BrowserRouter>
32|        <Routes>
33|          <Route path="/" element={<Home />}>
34|            <Route index element={<Home />} />
35|          </Route>
36|        </Routes>
37|      </BrowserRouter>
38|      <Toaster />
39|    </div>
40|  );
41|}
42|
43|export default App;
