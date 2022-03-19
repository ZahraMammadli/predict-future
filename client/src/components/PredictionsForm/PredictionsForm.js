import { useState } from "react";
import Button from "@mui/material/Button";
import "./PredictionsForm.css";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { ADD_PREDICTION } from "../../utils/mutations";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import Auth from "../../utils/auth";
import GiphyBox from "../GiphyBox/GiphyBox";

const TEXT_SIZE = 250;

export default function PredictionsForm() {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setInputText(input);
  };

  const [addPrediction, { error }] = useMutation(ADD_PREDICTION, {
    update(cache, { data: { addPrediction } }) {
      try {
        const { predictions } = cache.readQuery({ query: QUERY_PREDICTIONS });

        cache.writeQuery({
          query: QUERY_PREDICTIONS,
          data: { predictions: [addPrediction, ...predictions] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handlePredict = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPrediction({
        variables: {
          predictionText: inputText,
          predictionAuthor: Auth.getProfile().data.username,
          tags: "#tag",
        },
      });

      setInputText("");
    } catch (err) {
      console.error(err);
    }
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

        <GiphyBox predictionsString={inputText} />

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
