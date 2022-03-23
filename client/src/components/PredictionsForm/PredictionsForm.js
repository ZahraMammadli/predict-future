import { useState } from "react";
import Button from "@mui/material/Button";
import "./PredictionsForm.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { ADD_PREDICTION } from "../../utils/mutations";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import Auth from "../../utils/auth";
import GiphyBox from "../GiphyBox/GiphyBox";
// import MaterialUIPickers from "./datePicker";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const TEXT_SIZE = 250;

export default function PredictionsForm() {
  const [predictionDate, setValue] = React.useState(
    new Date("2022-03-20T00:00:00.000Z")
  );

  const [giphyUrl, setGiphyUrl] = useState();
  const [showGiphyBox, setShowGiphyBox] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
    console.log(giphyUrl);

    try {
      const { data } = await addPrediction({
        variables: {
          predictionText: inputText,
          predictionAuthor: Auth.getProfile().data.username,
          tags: "#tag",
          predictionDate: predictionDate,
          url: giphyUrl,
        },
      });

      setInputText("");
    } catch (err) {
      console.error(err);
    }
  };
  const handleShowGiphyBox = () => {
    if (showGiphyBox) {
      setShowGiphyBox(false);
    } else {
      setShowGiphyBox(true);
    }
  };

  return (
    <div className="pf-body">
      <form>
        <TextField
          id="outlined-basic"
          label="Enter the text here"
          className="pf-input"
          placeholder="Enter the prediction here"
          onChange={handleInput}
          value={inputText}
          variant="outlined"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DateTimePicker
              label="Date&Time picker"
              value={predictionDate}
              onChange={handleChange}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                >
                  {" "}
                  <input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </Stack>
        </LocalizationProvider>

        <h4>Remaining chars: {TEXT_SIZE - inputText.length}</h4>

        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={showGiphyBox} onChange={handleShowGiphyBox} />
            }
            label="Add a giphy"
          />
        </FormGroup>
        {showGiphyBox && <GiphyBox setGiphyUrl={setGiphyUrl} />}

        <div className="pf-footer">
          <div className="pf-predict-btn">
            <Button
              variant="contained"
              onClick={handlePredict}
              style={{
                backgroundColor: "blue",
              }}
            >
              Predict
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
