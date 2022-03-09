const { AuthenticationError } = require("apollo-server-express");
const { User, Thought } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    msg: () => {
      return "hello world";
    },
  },
};

module.exports = resolvers;
