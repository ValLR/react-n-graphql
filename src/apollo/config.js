import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { BFF_URI } from '@env';

const BASE_URL = `${BFF_URI}`;

const httpLink = new HttpLink({
  uri: BASE_URL
})
 
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
