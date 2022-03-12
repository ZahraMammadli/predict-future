import * as React from "react";
import { QUERY_PREDICTIONS } from "../../utils/queries";
import Predictions from "./predictions";
import { useQuery } from "@apollo/client";

const Feed = () => {
  const { loading, data } = useQuery(QUERY_PREDICTIONS);
  const predictions = data?.predictions || [];
  console.log(predictions);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
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
