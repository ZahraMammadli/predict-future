import { useState } from "react";

const TEXT_SIZE = 250;

export default function PredictionsForm() {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setInputText(input);
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

        <input type="button" value="Shoot" />
        <h4>Remaining chars: {TEXT_SIZE - inputText.length}</h4>
      </form>
    </div>
  );
}
