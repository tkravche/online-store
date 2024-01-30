import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../thunks/auth';
import { Slide, toast } from 'react-toastify';

type userStateProps = {
  accessToken: null | string;
  refreshToken: null | string;
  isLogged: boolean;
  isLoading: boolean;
};

const initialState: userStateProps = {
  accessToken: null,
  refreshToken: null,
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
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
  },
});

export default authSlice.reducer;
