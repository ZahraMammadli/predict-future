import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
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
