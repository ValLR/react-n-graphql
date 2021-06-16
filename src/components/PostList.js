import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../Apollo/Queries/PostQueries';

export default function PostList() {
  const { loading, data, refetch } = useQuery(GET_POSTS,
    {
      variables: {
        options: {
          paginate: {
            "page": 1,
            "limit": 5
          }
        }
      }
    }
  );

  return (
    <View>
      {!loading && data && data.posts && (
        <FlatList
          data={data.posts.data}
          renderItem={({item}) => (
            <Text style={styles.item} key={item.id}>
              {item.title}
            </Text>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: 'black',
    fontSize: 18,
  },
});
