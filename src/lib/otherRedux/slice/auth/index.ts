import { createSlice } from '@reduxjs/toolkit';
import {
  clearToken,
  loginUser,
  refreshThunk,
  registerUser,
} from '../../thunks/auth';
import { Slide, toast } from 'react-toastify';

type userStateProps = {
  accessToken: null | string;
  refreshToken: null | string;
  isLogged: boolean;
  isLoading: boolean;
  isAuthOpen: boolean;
  isRegistered: boolean;
  isVerified: boolean;
};

const initialState: userStateProps = {
  accessToken: null,
  refreshToken: null,
  isLogged: false,
  isRegistered: false,
  isLoading: false,
  isAuthOpen: false,
  isVerified: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthOpen = payload;
    },
    setVerified: (state, { payload }) => {
      state.isVerified = payload;
    },
    logoutUser: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLogged = false;
      localStorage.removeItem('accessToken');
      clearToken();
      toast.info('You were successfully logged out.', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.isRegistered = false;
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, state => {
      state.isRegistered = true;
      state.isLoading = false;
      toast.success('You are registering.', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    });
    builder.addCase(registerUser.rejected, state => {
      state.isRegistered = false;
      state.isLoading = false;
      toast.error('Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    });
    builder.addCase(loginUser.pending, state => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      state.isLogged = true;
      state.isLoading = false;
      toast.success('You are logged in.', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    });
    builder.addCase(loginUser.rejected, state => {
      state.isLogged = false;
      state.isLoading = false;
      toast.error('Please try again. The email or login are wrong.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    });
    builder.addCase(refreshThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(refreshThunk.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(refreshThunk.rejected, state => {
      state.isLogged = false;
      state.isLoading = false;
      state.isAuthOpen = true;
      toast.error('Please login.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    });
  },
});

export const { logoutUser, setAuth, setVerified } = authSlice.actions;
export default authSlice.reducer;
