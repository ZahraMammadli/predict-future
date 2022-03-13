import { useState } from "react";
import Button from "@mui/material/Button";

const TEXT_SIZE = 250;

export default function PredictionsForm() {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setInputText(input);
  };

  const handlePredict = () => {
    console.log("Predict: ", inputText);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the text here"
          onChange={handleInput}
          value={inputText}
        />

        <h4>Remaining chars: {TEXT_SIZE - inputText.length}</h4>
        <Button variant="contained" onClick={handlePredict}>
          Predict
        </Button>
      </form>
    </div>
  );
}
