import * as React from "react";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import Predictions from "./predictions";
import { useQuery } from "@apollo/client";

const Feed = ({ predictions, loading }) => {
  return (
    <main>
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Predictions predictions={predictions} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Feed;
