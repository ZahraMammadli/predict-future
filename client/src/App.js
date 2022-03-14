import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="app">
      {/* <LandingPage /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
