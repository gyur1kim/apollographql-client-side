import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "https://odyssey-lift-off-server.herokuapp.com/",
  link: new HttpLink({
    uri: "https://odyssey-lift-off-server.herokuapp.com/",
  }),
  cache: new InMemoryCache(),
});
