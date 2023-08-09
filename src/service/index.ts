import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const twitterApi = createApi({
  reducerPath: "twitterapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2999" }),
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
  }),
});

export const { useSignInMutation, useSignUpMutation } = twitterApi;