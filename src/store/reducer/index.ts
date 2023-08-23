import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import { twitterApi } from "../../service";
import { tweetApi } from "../../service/tweets";

const rootReducers = combineReducers({
  auth: AuthSlice,
  [twitterApi.reducerPath]: twitterApi.reducer,
  [tweetApi.reducerPath]: tweetApi.reducer,
});

export default rootReducers;
