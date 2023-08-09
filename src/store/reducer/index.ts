import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import { twitterApi } from "../../service";



const rootReducers = combineReducers({
  auth: AuthSlice,
  [twitterApi.reducerPath]: twitterApi.reducer,
});

export default rootReducers;
