import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POST_BY_ID } from '../apollo/queries/postQueries';

export default function PostDetail(props) {
  const { params } = props.route;
  const { id } = params;
  const { loading, data } = useQuery(GET_POST_BY_ID,
    {
      variables: { id }
    }
  );
  
  return !loading && data && data.post && (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.post.title}</Text>
      <Text style={styles.body}>{data.post.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    backgroundColor: '#f9c2ff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#A597CE'
  },
});

