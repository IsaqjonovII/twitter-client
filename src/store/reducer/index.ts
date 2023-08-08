import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const rootReducers = combineReducers({
  auth: AuthSlice,
});

export default rootReducers;
