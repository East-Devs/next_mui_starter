import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  user: null,
  jwt: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    signIn: (state, action) => {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    },
    logout: (state, _action) => {
      state.user = null;
      state.jwt = null;
    },
  },
});

export const { addUser, signIn, logout } = usersSlice.actions;

export default usersSlice.reducer;
