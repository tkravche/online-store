import { createSlice } from '@reduxjs/toolkit';
import {
  changePasswordThunk,
  clearToken,
  loginUser,
  refreshThunk,
  registerUser,
} from '../../thunks/auth';
import { toast } from 'react-toastify';
import type { PayloadAction } from '@reduxjs/toolkit';
import { logoutCurrentUser } from '../user';

type userStateProps = {
  accessToken: null | string;
  refreshToken: null | string;
  isLogged: boolean;
  isLoading: boolean;
  isAuthOpen: boolean;
  isRegistered: boolean;
  isVerified: boolean;
  passwordChanged: boolean;
};

const initialState: userStateProps = {
  accessToken: null,
  refreshToken: null,
  isLogged: false,
  isRegistered: false,
  isLoading: false,
  isAuthOpen: false,
  isVerified: false,
  passwordChanged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuthOpen = payload;
    },
    setRegistered: (state, { payload }) => {
      state.isRegistered = payload;
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
      toast.info('You were successfully logged out.', {});
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
      toast.success('You are registering.', {});
    });
    builder.addCase(
      registerUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.isRegistered = false;
        state.isLoading = false;
        toast.error(action.payload.message, {});
      }
    );
    builder.addCase(loginUser.pending, state => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      state.isLogged = true;
      state.isLoading = false;
      toast.success('You are logged in.', {});
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.isLogged = false;
      state.isLoading = false;
      if (
        action.payload ===
        "Cannot read properties of undefined (reading 'data')"
      ) {
        toast.error('Please make sure you verified the email', {});
      } else {
        toast.error('Please try again. The email or login are wrong.', {});
      }
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
      toast.error('Please login.', {});
    });
    builder.addCase(changePasswordThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(changePasswordThunk.fulfilled, state => {
      state.passwordChanged = true;
      toast.success('You have successfully changed your password', {});
    });
    builder.addCase(
      changePasswordThunk.rejected,
      (state) => {
        state.isLoading = false;
        toast.error('Please try again', {});
      }
    );
  },
});

export const { logoutUser, setAuth, setVerified, setRegistered } =
  authSlice.actions;
export default authSlice.reducer;
