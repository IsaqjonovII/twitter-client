import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { twitterApi } from "../service";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tweetApi } from "../service/tweets";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      twitterApi.middleware,
      tweetApi.middleware
    );
  },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
