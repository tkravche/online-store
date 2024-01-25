import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../thunks/auth';

const initialState = {
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
    builder.addCase(loginUser.pending, (state) => {
      state.isLogged = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLogged = false;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
