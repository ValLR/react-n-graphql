import gql from 'graphql-tag';

export const CREATE_POST = gql`
mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`
