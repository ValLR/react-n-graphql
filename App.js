import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo/config';
import PostList from './src/components/PostList';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PostList />
    </ApolloProvider>
  );
}