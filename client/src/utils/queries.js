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
//search feature

export const QUERY_SEARCH_PREDICTIONS = gql`
  query searchPredictions($searchString: String!) {
    predictions(searchString: $searchString) {
      _id
      predictionText
      predictionAuthor
      createdAt
      predictionDate
      url
    }
  }
`;
