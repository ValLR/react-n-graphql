import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import { useMutation } from '@apollo/client';
import RoundedButton from '../components/RoundedButton';
import { CREATE_POST } from '../apollo/mutations/postListMutations';

export default function PostForm({ route, navigation }) {
  const [ addPost ] = useMutation(CREATE_POST);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <Text>Title</Text>
          <TextInput
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder="Write a title"
            autoCorrect={false}
            style={styles.input, styles.inputTitle}
          />
        </View>
        <View>
          <Text>Body</Text>
          <TextInput
            onChangeText={body => setBody(body)}
            value={body}
            placeholder="Write your post"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input, styles.inputBody}
          />
        </View>
      </View>
      <RoundedButton
        text="Create post"
        textColor="white"
        backgroundColor="#29C1A2"
        onPress={() => {
          addPost({
            variables: {
              input: {
                title,
                body
              }
            }
          })
          .then(() => navigation.goBack())
          .catch(err => console.log(err))
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  inputContainer: {
    justifyContent: 'space-around',
    paddingVertical: 25,
    paddingHorizontal: 5
  },
  input: {
    flex: 1,
    height: 40,    
  },
  inputTitle: {
    backgroundColor: '#f9c2ff',
  },
  inputBody: {
    backgroundColor: '#A597CE',
  }
});
