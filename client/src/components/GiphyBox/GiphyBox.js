// source for the giphy search box: https://github.com/sergiop/react-giphy-searchbox/blob/master/README.md

import React from "react";
import "./GiphyBox.css";
import ReactGiphySearchbox from "react-giphy-searchbox";

const GiphyBox = (props) => {
  console.log(props.predictionsString);
  // TODO: get user from context, get prediction text from props, giphy link from the "onSelect" prop inside the ReactGiphySearchbox component (store it in state maybe?)
  // TODO: exectue mutation with required data and store it in the database

  return (
    <>
      <div className="searchboxWrapper">
        <ReactGiphySearchbox
          apiKey="7GziugKxtDS1CNfmNR3SLe4bjbPjxUfp"
          onSelect={(item) => console.log(item)}
          masonryConfig={[
            { columns: 2, imageWidth: 110, gutter: 5 },
            { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 },
          ]}
        />
      </div>
    </>
  );
};

export default GiphyBox;
