const { gql } = require("apollo-server-express");
const { User } = require("../models");

const typeDefs = gql`
  type Query {
    msg: String
    users: [User]
    user(username: String!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    predictions: [Prediction]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Prediction {
    _id: ID
    predictionText: String
    predictionAuthor: String
    createdAt: String
    predictionDate: String
    tags: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPrediction(
      predictionText: String!
      predictionAuthor: String!
      tags: String
    ): Prediction
    removePrediction(predictionId: String!): Prediction
  }
`;

module.exports = typeDefs;
