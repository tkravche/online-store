import { instance } from '@/hooks/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAccessToken, selectRefreshToken } from '../../selectors';
import { IChangeData } from '@/types';

export const setToken = (token: any) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common['Authorization'] = ``;
};

// what is to be expected to return
export type ILoginData = {
  data: { accessToken: string; refreshToken: string };
};

export const loginUser = createAsyncThunk<
  ILoginData,
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const user = await instance.post('auth/email/login', credentials);
    setToken(user?.data?.data?.accessToken);
    return user.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

// what is to be expected to return
export type IRegisterData = {
  id: number;
  name: string;
  email: string;
  phoneNumber: null | string;
  role: string;
  isEmailConfirmed: boolean;
  provider: 'EMAIL';
  favorites: [];
  cart: {
    id: number;
  };
  address: null | object;
};

export const registerUser = createAsyncThunk<
  IRegisterData,
  { name: string; email: string; password: string },
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const user = await instance.post('auth/email/register', credentials);
    return user.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export type IRefreshData = {
  data: { accessToken: string; refreshToken: string };
};

export const refreshThunk = createAsyncThunk<
  IRefreshData,
  { rejectValue: string; getState: string }
>('auth/refresh', async (_, { rejectWithValue, getState }) => {
  try {
    const refreshToken = selectRefreshToken(getState());
    const token = { refreshToken };
    const user = await instance.post('auth/refresh', token);
    return user.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const changePasswordThunk = createAsyncThunk<
  IChangeData,
  { oldPassword: string; newPassword: string }
>('auth/changePassword', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const user = await instance.post('auth/email/change/password', data);
    return user.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
