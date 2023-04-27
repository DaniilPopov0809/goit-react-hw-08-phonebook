import { createSlice } from '@reduxjs/toolkit';
import authOperation from './auth-operations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(authOperation.register.pending, state => state)
      .addCase(authOperation.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Registration is successful');
      })
      .addCase(authOperation.register.rejected, () => {
        toast.error('Registration is failed. Try again.');
      })
      .addCase(authOperation.login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success('Login is successful!');
      })
      .addCase(authOperation.login.rejected, () => {
        toast.error('Login is failed. Try to register.');
      })
      .addCase(authOperation.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperation.refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperation.refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperation.refresh.rejected, state => {
        state.isRefreshing = false;
      }),
});
