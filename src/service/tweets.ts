import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { ITweet } from "../interfaces";

export const tweetApi = createApi({
  reducerPath: "tweetapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://twitter-server-dy4c.onrender.com",
  }),
  endpoints: (builder) => ({
    postTweet: builder.mutation({
      query: (content: string) => ({
        url: "/tweet",
        method: "POST",
        body: { content },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    likeTweet: builder.mutation({
      query: (tweetID: string) => ({
        url: `/tweet/${tweetID}/like`,
        method: "POST",
      }),
    }),
    getAllTweets: builder.query<ITweet[], void>({
        query: () => ({
            url: "/tweets",
            method: "GET",
        }),
        transformResponse: (response) => response.data
    }),
  }),
});
