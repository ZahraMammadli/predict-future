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
      predictions {
        _id
        predictionText
        createdAt
      }
    }
  }
`;
export const QUERY_SINGLE_PREDICTION = gql`
  query getSinglePrediction($predictionId: ID!) {
    prediction(predictionId: $predictionId) {
      _id
      predictionText
      predictionAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      predictions {
        _id
        predictionText
        predictionAuthor
        createdAt
      }
    }
  }
`;
//search feature

export const QUERY_SEARCH_PREDICTIONS = gql`
  query searchPredictions($searchString: String!) {
    searchingPredictions(searchString: $searchString) {
      _id
      predictionText
      predictionAuthor
      createdAt
      predictionDate
      url
    }
  }
`;
