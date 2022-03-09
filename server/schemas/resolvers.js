const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    msg: () => {
      return "hello world";
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.find(args.username);
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { user, token };
    },
  },
};

module.exports = resolvers;
