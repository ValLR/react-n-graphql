import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../apollo/queries/postQueries';

export default function PostList(props) {
  const { navigation } = props;
  const { loading, data } = useQuery(GET_POSTS,
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
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
              <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
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
