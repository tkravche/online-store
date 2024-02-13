import { instance } from '@/hooks/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAccessToken } from '../../selectors';
import { IRegisterData, setToken } from '../auth';

// what is to be expected to return

export const currentUserThunk = createAsyncThunk(
  'user/getInfo',
  async (_, { rejectWithValue }) => {
    try {
      const currentUser = await instance('users/me');
      return currentUser.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addToFavoritesThunk = createAsyncThunk<
  IRegisterData,
  { id: number },
  { rejectValue: string }
>('user/addToFavorites', async ({id}, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const currentUserInfo = await instance.post(`users/me/favorites/${id}`);
    return currentUserInfo.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const removeFromFavoritesThunk = createAsyncThunk<
IRegisterData,
{ id: number },
{ rejectValue: string }
>(
  'user/removeFromFavorites',
  async ({id}, { rejectWithValue, getState }) => {
    const token = selectAccessToken(getState());
    setToken(token);
    try {
      const currentUserInfo = await instance.delete(`users/me/favorites/${id}`);
      return currentUserInfo.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUserCartThunk = createAsyncThunk(
  'user/getCart',
  async (_, { rejectWithValue }) => {
    try {
      const currentUserCart = await instance('carts/my/items');
      return currentUserCart.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addReviewThunk = createAsyncThunk<
IRegisterData,
{ text: string; stars: number; article: number },
{ rejectValue: string }
>(
  'user/addReview',
  async (data, { rejectWithValue, getState }) => {
    const token = selectAccessToken(getState());
    setToken(token);
    try {
      const review = await instance.post(`reviews`, data);
      return review.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
