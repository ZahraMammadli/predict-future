import { gql } from "@apollo/client";

export const ADD_PREDICTION = gql`
  mutation (
    $predictionText: String!
    $predictionAuthor: String!
    $tags: String
  ) {
    addPrediction(
      predictionText: $predictionText
      predictionAuthor: $predictionAuthor
      tags: $tags
    ) {
      _id
      predictionText
      predictionAuthor
      createdAt
      predictionDate
      tags
    }
  }
`;
