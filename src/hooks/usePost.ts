import {
  ADD_POST,
  QUERY_POST,
  QUERY_POSTS,
  UPDATE_POST,
} from "../graphql/post";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { ADD_POST_TYPE, QUERY_POST_TYPES } from "../graphql/postType";
import { Post, RelatedPost } from "../types/postType";
import { useEffect, useState } from "react";

export const useQueryBlogs = (
  pageSize: number,
  page: number,
  typeId: string
) => {
  const { loading, data } = useQuery(QUERY_POSTS, {
    variables: {
      pageNumber: pageSize,
      page: page,
      typeId: typeId == "null" ? "" : typeId,
    },
  });
  const _data = data?.posts.data;

  return { loading, _data, total: data?.posts.total };
};

export const useQueryBlog = (
  id: string
): {
  loading: boolean;
  error: ApolloError | undefined;
  _data: Post;
  relatedPosts: RelatedPost[];
} => {
  const { loading, error, data } = useQuery(QUERY_POST, {
    variables: { id: id },
  });
  const _data = data?.post.data;
  const relatedPosts = data?.post.relatedPosts;
  return { loading, error, _data, relatedPosts };
};

export const useQueryPostTypes = () => {
  const { loading, data } = useQuery(QUERY_POST_TYPES);
  const _data = data?.postTypes.data;
  return { loading, _data };
};

export const useAddPost = () => {
  const [addPostFunction, { data, loading, error }] = useMutation(ADD_POST);
  const _data = data?.addPost.data;
  return { addPostFunction, loading, error, _data };
};

export const useUpdatePost = () => {
  const [updatePostFunction, { data, loading, error }] =
    useMutation(UPDATE_POST);
  const _data = data?.addPost.data;
  return { updatePostFunction, loading, error, _data };
};

export const useAddPostType = () => {
  const [addPostTypeFunction, { data, loading, error }] =
    useMutation(ADD_POST_TYPE);
  const _data = data?.addPostType.data;
  return { addPostTypeFunction, loading, error, _data };
};
