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

  // ML model to extract keywords
  let model_id = "ex_YCya9nrn";

  //   let wordCloudData;
  const ml = new MonkeyLearn("b7fffd90a7904d8663f01c263ad332062e85c8db");

  try {
    const extractor = await ml.extractors.extract(model_id, data);

    wordCloud = extractor.body[0].extractions;
    console.log(wordCloud);
  } catch (error) {
    // handle error
    console.log(error);
    console.log(error.response);
  }
}

const getWordCloud = () => {
  return wordCloud;
};

module.exports = { generateWordCloud, getWordCloud };

// Use the API key from your account
