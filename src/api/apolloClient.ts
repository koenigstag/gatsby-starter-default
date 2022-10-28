import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/__graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
  connectToDevTools: true,
});

export default client;
