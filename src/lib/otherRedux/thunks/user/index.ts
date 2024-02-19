import { instance } from '@/hooks/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectAccessToken } from '../../selectors';
import { IRegisterData, setToken } from '../auth';
import { ICartData, ICartItemsData, IOrderData, IOrdersData } from '@/types';

export const currentUserThunk = createAsyncThunk<IRegisterData>(
  'user/getUserInfo',
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

export const updateUserThunk = createAsyncThunk<
  IRegisterData,
  {
    name: null | string;
    phoneNumber: null | string;
    street: null | string;
    city: null | string;
    country: null | string;
    postCode: null | string;
  }
>('user/updateUserInfo', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const currentUser = await instance.patch('users/me', data);
    return currentUser.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const addToFavoritesThunk = createAsyncThunk<
  IRegisterData,
  { id: number },
  { rejectValue: string }
>('user/addToFavorites', async ({ id }, { rejectWithValue, getState }) => {
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
>('user/removeFromFavorites', async ({ id }, { rejectWithValue, getState }) => {
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
});

export const addReviewThunk = createAsyncThunk<
  IRegisterData,
  { text: string; stars: number; article: number },
  { rejectValue: string }
>('user/addReview', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const review = await instance.post('reviews', data);
    return review.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const editReviewThunk = createAsyncThunk<
  IRegisterData,
  { reviewId: number; text: string; stars: number },
  { rejectValue: string }
>('user/editReview', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const { reviewId } = data;
    const { text, stars } = data;
    const dataReview = { text, stars };
    const review = await instance.patch(`reviews/${reviewId}`, dataReview);
    return review.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getCartItemsThunk = createAsyncThunk<
  ICartItemsData,
  { page: null | number; limit: null | number }
>(
  'user/getCartItems',
  async ({ page, limit }, { rejectWithValue, getState }) => {
    const token = selectAccessToken(getState());
    setToken(token);
    try {
      const params = {
        page,
        limit,
      };
      const cart = await instance('carts/my/items', { params });
      return cart.data.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addItemToCartThunk = createAsyncThunk<
  ICartData,
  { quantity: number; article: number },
  { rejectValue: string }
>('user/addItemToCart', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const cart = await instance.post('carts/my/items/increment', data);
    return cart.data.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const removeItemFromCartThunk = createAsyncThunk<
  ICartData,
  { quantity: number; article: number },
  { rejectValue: string }
>('user/removeItemFromCart', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const cart = await instance.delete('carts/my/items/decrement', { data });
    return cart.data.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getOrdersThunk = createAsyncThunk<
  IOrdersData,
  { page: null | number; limit: null | number }
>('user/getOrders', async ({ page, limit }, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const params = {
      page,
      limit,
    };
    const orders = await instance('orders/my', { params });
    return orders.data.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const createOrderThunk = createAsyncThunk<
  IOrderData,
  {
    addition: string;
    street: string;
    city: string;
    country: string;
    postCode: string;
  },
  { rejectValue: string }
>('user/createOrder', async (data, { rejectWithValue, getState }) => {
  const token = selectAccessToken(getState());
  setToken(token);
  try {
    const order = await instance.post('orders', data);
    return order.data.data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
