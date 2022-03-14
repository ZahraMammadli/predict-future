import { useState } from "react";
import Button from "@mui/material/Button";
import "./PredictionsForm.css";
import TextField from "@mui/material/TextField";

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
    <div className="pf-body">
      <form>
        <TextField
          id="outlined-basic"
          label="Enter the text here"
          className="pf-input"
          placeholder="Enter the text here"
          onChange={handleInput}
          value={inputText}
          variant="outlined"
        />

        <h4>Remaining chars: {TEXT_SIZE - inputText.length}</h4>

        <div className="pf-footer">
          <div className="pf-predict-btn">
            <Button variant="contained" onClick={handlePredict}>
              Predict
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
