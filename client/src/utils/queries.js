import { gql } from "@apollo/client";

export const QUERY_PREDICTIONS = gql`
  query predictions {
    predictions {
      _id
      predictionText
      predictionAuthor
      createdAt
      predictionDate
      url
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
