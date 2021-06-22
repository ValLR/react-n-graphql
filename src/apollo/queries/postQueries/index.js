import gql from 'graphql-tag';

export const GET_POSTS = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
`

export const GET_POST_BY_ID = gql`
query (
  $id: ID!
) {
  post(id: $id) {
    id
    title
    body
    user {
      username
    }
  }
}
`
