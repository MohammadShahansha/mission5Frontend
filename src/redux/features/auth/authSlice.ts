import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type TInitialState = {
  user: null | object;
  token: null | string;
};
const initialState: TInitialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const useCorrentToken = (state: RootState) => state.auth.token;
// export const useCorrentUser = (state: RootState) => state.auth.user;
export const selectCorrentUser = (state: RootState) => state.auth.user;
