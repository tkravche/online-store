import { instance } from '@/hooks/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// what is to be expected to return
export type IArticlesData = {
  items: [];
  links: object;
  meta: object;
};

export const getArticlesThunk = createAsyncThunk<
  IArticlesData,
  { page: number; limit: number },
  { rejectValue: string }
>('catalog/getArticles', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const params = { page, limit };
    const articles = await instance('articles', { params });
    return articles.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getFilteredArticlesThunk = createAsyncThunk<
  IArticlesData,
  {
    page: null | number;
    limit: null | number;
    saleChecked: null | boolean;
    category: null | string;
    starsCount: null | number;
    price: null | string;
    maxPrice: null| number;
    minPrice: null| number;
  },
  { rejectValue: string }
>(
  'catalog/getFilteredArticles',
  async (
    { saleChecked, category, page, limit, starsCount, price, maxPrice, minPrice },
    { rejectWithValue }
  ) => {
    try {
      let sale = null;
      if (saleChecked) {
        sale = 'inc';
      }
      const params = { page, limit, category, sale, starsCount, price,minPrice, maxPrice };
      const articles = await instance('articles', { params });
      return articles.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const searchArticlesThunk = createAsyncThunk<
  IArticlesData,
  { page: null | number; limit: null | number; search: string },
  { rejectValue: string }
>(
  'catalog/searchArticles',
  async ({ page, limit, search }, { rejectWithValue }) => {
    try {
      const params = { page, limit, search };
      const articles = await instance('articles', { params });
      return articles.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
