import React from "react";
import WordCloud from "react-d3-cloud";
import "./wordcloud.css";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
// import data from "./data.json"; TODO get the words from the graphql

const wordsList = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 10 },
];

const fontSize = (word) => word.value / 20;
const rotate = (word) => (word.value % 90) - 45;

export default function Words() {
  const { loading, data } = useQuery(QUERY_PREDICTIONS);
  const predictions = data?.predictions || [];
  let newWords = predictions.map((prediction) => prediction.predictionText);
  //   console.log(newWords);
  const myArray = newWords.map((i) => i.split(" "));

  //   Get count of unique words
  var words = [];
  var counts = [];
  function calculate(inputs) {
    for (var i = 0; i < inputs.length; i++) {
      var isExist = false;
      for (var j = 0; j < words.length; j++) {
        if (inputs[i] == words[j]) {
          isExist = true;
          counts[i] = counts[i] + 1;
        }
      }
      if (!isExist) {
        words.push(inputs[i]);
        counts.push(1);
      }
      isExist = false;
    }
  }

  calculate(myArray[0]);
  console.log(words);
  console.log(counts);

  //   this is the renedering part

  const newData = wordsList.map((item) => ({
    text: item.text,
    value: Math.random() * 1000,
  }));
  return (
    <WordCloud
      width={1000}
      height={750}
      data={newData}
      fontSize={fontSize}
      rotate={rotate}
      padding={2}
    />
  );
}
