import "./App.css";
import Backgrdound from "./scripts/background";
// import { useEffect, useState } from "react";
// import ParticleBackground from "./scripts/ParticleBackground";

function App() {
  // const [showComponent, setShowComponent] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShowComponent(!showComponent);
  //   }, 5000);
  // }, []);
  return (
    <div>
      {/* {showComponent ? <Backgrdound /> : <ParticleBackground />} */}
      <Backgrdound />
      <CenterTitle />
    </div>
  );
}

function CenterTitle() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">Try to Predict the Future</h1>
      </div>
      <script src="./scripts/bcg.js"></script>
    </div>
  );
}

export default App;
