import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITweet } from "../interfaces";

interface TweetsData {
  tweets: ITweet[];
}

export const tweetApi = createApi({
  reducerPath: "tweetapi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://twitter-server-dy4c.onrender.com",
    baseUrl: "http://localhost:2999",
  }),
  endpoints: (builder) => ({
    postTweet: builder.mutation({
      query: (data) => ({
        url: "/tweet",
        method: "POST",
        body: data,
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
    getAllTweets: builder.query<TweetsData, void>({
      query: () => ({
        url: "/tweets-all",
        method: "GET",
      }),
    }),
    getSingleTweet: builder.query<ITweet, string>({
      query: (tweetID) => ({
        url: "/get-tweet-info/" + tweetID,
        method: "GET",
      }),
    }),
  }),
});
export const {
  usePostTweetMutation,
  useLikeTweetMutation,
  useGetAllTweetsQuery,
  useGetSingleTweetQuery,
} = tweetApi;
