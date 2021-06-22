import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './src/components/PostList';
import PostDetail from './src/components/PostDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={PostList} />
          <Stack.Screen name="Detail" component={PostDetail} />        
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}