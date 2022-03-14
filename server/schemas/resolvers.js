const { AuthenticationError } = require("apollo-server-express");
const { User, Prediction } = require("../models");
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
    predictions: async () => {
      return Prediction.find().sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { user, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    //  Todo: replace prediction Author by user. Update both prediction and User
    addPrediction: async (
      parent,
      { predictionText, predictionAuthor, tags }
    ) => {
      const prediction = Prediction.create({
        predictionText,
        predictionAuthor,
        tags,
      });

      await User.findOneAndUpdate(
        { username: predictionAuthor },
        { $addToSet: { prediction: prediction._id } }
      );

      return prediction;
    },
  },

  //  Todo: implement remove prediction functionality
};

module.exports = resolvers;