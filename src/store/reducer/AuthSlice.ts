import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

interface IState {
  token: string;
  user: IUser | null;
}
const initialState: IState = {
  token: "",
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      state.token = action.payload?.token;
      state.user = action.payload?.user;
    },
    signout(state) {
      state.token = "";
      state.user = null;
    },
  },
});
export default auth.reducer;
export const { signin, signout } = auth.actions;
