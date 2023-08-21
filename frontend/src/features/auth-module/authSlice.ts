import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialAuthState } from './types';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAdmin: false,
    isAuth: false,
    role: 'Client',
  } as InitialAuthState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        username: string;
        role: 'Client' | 'Admin';
        token: string;
      }>,
    ) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuth = true;
      if (action.payload.role === 'Admin') {
        state.isAdmin = true;
      }
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setIsAdmin: (state) => {
      state.isAdmin = true;
    },
    logout: (state) => {
      (state.isAdmin = false), (state.isAuth = false), (state.username = '');
    },
  },
});

export default authSlice.reducer;
export const { setIsAdmin, setIsAuth, setUser, logout } = authSlice.actions;
