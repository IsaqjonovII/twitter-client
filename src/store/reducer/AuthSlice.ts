import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

interface IState {
  token: string;
  user: IUser | null;
}
const initialState: IState = {
  token: localStorage.getItem("token") ||  "",
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      console.log(action);
      
      state.token = action.payload?.data.token;
      state.user = action.payload?.data.user;
    },
    signout(state) {
      state.token = "";
      state.user = null;
    },
  },
});
export default auth.reducer;
export const { signin, signout } = auth.actions;
