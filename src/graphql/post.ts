import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query Query($pageNumber: Int,$page:Int,$typeId:String) {
    posts(pageNumber: $pageNumber,page:$page,typeId:$typeId) {
      data {
        id
        title
        context
        createAt
        types {
          id
          type
        }
      }
      total
      error
    }
  }
`;

export const QUERY_POST = gql`
  query Query($id: String) {
    post(id: $id) {
      data {
        id
        title
        context
        createAt
        types {
          id
          type
        }
      }
      relatedPosts {
        id
        title
      }
      error
    }
  }
`;

export const ADD_POST = gql`
  mutation ($title: String!, $context: String!, $types: [String]) {
    addPost(title: $title, context: $context, types: $types) {
      data {
        id
      }
      error
    }
  }
`;

export const UPDATE_POST = gql`
  mutation (
    $id: String!
    $types: [String]
    $title: String!
    $context: String!
  ) {
    updatePost(id: $id, types: $types, title: $title, context: $context) {
      data {
        id
        title
        context
        types {
          id
          type
        }
      }
      error
    }
  }
`;
