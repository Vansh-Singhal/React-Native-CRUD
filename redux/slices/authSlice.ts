import { User } from "@/types/UserValidation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  Users: User[];
  logged_user: User | null;
}

const initialState: AuthState = {
  Users: [],
  logged_user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<User>) => {
      state.Users.unshift(action.payload);
    },
    login: (state, action: PayloadAction<User>) => {
      state.logged_user = action.payload;
    },
    logout: (state) => {
      state.logged_user = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
