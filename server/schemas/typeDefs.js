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
  }
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
