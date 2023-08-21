import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../interfaces";

export const twitterApi = createApi({
  reducerPath: "twitterapi",
  baseQuery: fetchBaseQuery({ 
    // baseUrl: "https://twitter-server-dy4c.onrender.com"
    baseUrl: "http://localhost:2999"
   }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    signIn: builder.mutation({
      query: (userData) => ({
        url: `/auth/login`,
        method: "POST",
        body: userData,
      }),
    }),
    getUserInfo: builder.query<IUser, string>({
      query: (username) => ({
        url: `/user-info/${encodeURIComponent(username)}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetUserInfoQuery } = twitterApi;
