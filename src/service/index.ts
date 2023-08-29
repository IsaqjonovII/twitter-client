import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse, IUser } from "../interfaces";

interface UserData {
  data: IUser;
}

type TLoginData = {
  username: string;
  password: string;
};

export const twitterApi = createApi({
  reducerPath: "twitterapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://twitter-server-dy4c.onrender.com",
    // baseUrl: "http://localhost:2999",
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    signIn: builder.mutation<IResponse, TLoginData>({
      query: (userData) => ({
        url: `/auth/login`,
        method: "POST",
        body: userData,
      }),
    }),
    getUserInfo: builder.query<UserData, string>({
      query: (username) => ({
        url: `/user-info/${encodeURI(username)}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetUserInfoQuery } =
  twitterApi;
