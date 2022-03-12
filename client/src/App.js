import "./App.css";
import CenterTitle from "./components/welcome";
import Backgrdound from "./components/background";
import Predictions from "./components/PredictionStream/predictions";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Feed from "./components/PredictionStream/feed";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Backgrdound /> */}
        {/* <CenterTitle /> */}
        <div className="Predictions">
          <Feed />
          {/* <Predictions
            User="Zahra Mammadli"
            Text="I predict cars will fly by 2024"
          />
          <Predictions
            User="Homer Simpson"
            Text="Swapnil will be prime minister of UK"
          />
          <Predictions
            User="Test User 5"
            Text="The war will be over by first week of April 2022"
          /> */}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
