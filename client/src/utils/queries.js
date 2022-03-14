import { gql } from "@apollo/client";

export const QUERY_PREDICTIONS = gql`
  query predictions {
    predictions {
      _id
      predictionText
      predictionAuthor
      createdAt
      predictionDate
    }
  }
`;
