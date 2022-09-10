import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../store/models/postTypes";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: ['Post'],
  endpoints: (buider) => ({
    getAllPosts: buider.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: "/posts",
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Post']
    }),
    createPost: buider.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: buider.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: buider.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "DELETE",
        body: post
      }),
      invalidatesTags: ['Post']
    }),
  }),
});
