import * as React from "react";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import Predictions from "./predictions";
import { useQuery } from "@apollo/client";

const Feed = () => {
  const { loading, data } = useQuery(QUERY_PREDICTIONS);
  const predictions = data?.predictions || [];

  return (
    <main>
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Predictions
              predictions={predictions}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Feed;
