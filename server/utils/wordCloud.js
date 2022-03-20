const MonkeyLearn = require("monkeylearn");
const { Prediction } = require("../models");

let wordCloud = [];
async function generateWordCloud() {
  // get predictions texts and form and concatenate data
  const predictions = await Prediction.find().sort({ createdAt: -1 });
  let newWords = predictions.map((prediction) => prediction.predictionText);
  let myArray = [].concat.apply([], newWords);
  let words = myArray.join(" ");
  // Create new array with text to pass to ML model
  let data = [];
  data.push(words);
  //   console.log(wordCloud);

  // ML model to extract keywords
  let model_id = "ex_YCya9nrn";

  //   let wordCloudData;
  const ml = new MonkeyLearn("b7fffd90a7904d8663f01c263ad332062e85c8db");
  const extractor = ml.extractors
    .extract(model_id, data)
    .then((response) => {
      // handle response
      //   console.log(response);
      return response.body[0].extractions;
      //   console.log(response.body[0].extractions);
    })
    .catch((error) => {
      // handle error
      console.log(error);
      // if an error is thrown during the request
      // it will also contain the (failure) response
      console.log(error.response);
    });

  const wordCloud = await extractor;
  //   console.log(wordCloud);
  //   wordCloud = [{ text: "dooms day", value: 10 }];
}

module.exports = { generateWordCloud, wordCloud };

// Use the API key from your account
