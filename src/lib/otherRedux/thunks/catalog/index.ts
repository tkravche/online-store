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
