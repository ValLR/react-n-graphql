import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './src/screens/PostList';
import PostDetail from './src/screens/PostDetail';
import PostForm from './src/screens/PostForm';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={PostList} options={({ navigation }) => ({
            headerRight: props => (
              <TouchableOpacity onPress={() => navigation.navigate("PostForm")}>
                <Text>Create new post</Text>
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Detail" component={PostDetail} />
          <Stack.Screen name="PostForm" component={PostForm} />      
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}