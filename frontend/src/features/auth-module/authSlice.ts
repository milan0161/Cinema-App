import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialAuthState } from './types';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAdmin: false,
    isAuth: false,
    role: 'USER',
  } as InitialAuthState,
  reducers: {
    setUser: (state, action: PayloadAction<{ username: string; role: 'USER' | 'ADMIN' }>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.isAuth = true;
      if (action.payload.role === 'ADMIN') {
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
