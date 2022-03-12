import "./App.css";
import CenterTitle from "./components/welcome";
import Backgrdound from "./components/background";
import Stack from "@mui/material/Stack";
import Predictions from "./components/PredictionStream/predictions";

function App() {
  return (
    <div>
      {/* <Backgrdound /> */}
      {/* <CenterTitle /> */}
      <div className="Predictions">
        <Stack spacing={1}>
          <Predictions
            User="Zahra Mammadli"
            Text="I predict cars will fly by 2024"
          />
          <Predictions
            User="Homer Simpson"
            Text="Swapnil will be prime minister of UK"
          />
          <Predictions
            User="Test User 5"
            Text="The war will be over by first week of April 2022"
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
