import React from "react";
import WordCloud from "react-d3-cloud";
import "./wordcloud.css";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { getWordCloudData } from "../../utils/Api";
// import data from "./data.json"; TODO get the words from the graphql

// get words data from server
const test = async () => {
  try {
    const response = await getWordCloudData();
    console.log(response);
    if (!response.ok) {
      throw new Error("something went wrong!");
    }

    const items = await response.json();
    return items;
  } catch (err) {
    console.error(err);
  }
};

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
