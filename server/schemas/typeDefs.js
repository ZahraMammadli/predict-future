const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    msg: String
  }
`;

module.exports = typeDefs;
