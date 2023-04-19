import { gql } from "@apollo/client";

export const QUERY_POST_TYPES = gql`
  query Query {
    postTypes {
      data {
        id
        type
      }
      error
    }
  }
`;

export const ADD_POST_TYPE = gql`
  mutation ($type: String!) {
    addPostType(type: $type) {
      data {
        id
      }
      error
    }
  }
`;
