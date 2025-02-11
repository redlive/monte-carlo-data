import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// The Apollo Sandbox API endpoint
const httpLink = new HttpLink({
  uri: 'https://countries.trevorblades.com/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

export {}; // Make the file a module
