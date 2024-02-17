import { createSlice } from '@reduxjs/toolkit';
import {
  IArticlesData,
  getArticlesThunk,
  getFilteredArticlesThunk,
  searchArticlesThunk,
} from '../../thunks/catalog';

type catalogStateProps = {
  articles: IArticlesData;
  filteredArticles: IArticlesData;
  searchedArticles: IArticlesData;
  isLoading: boolean;
  error: string | null;
};
const initialState: catalogStateProps = {
  articles: { items: [], links: {}, meta: {} },
  filteredArticles: { items: [], links: {}, meta: {} },
  searchedArticles: { items: [], links: {}, meta: {} },
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSearchedArticles: (state, action) => {
      state.searchedArticles = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getArticlesThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getArticlesThunk.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.filteredArticles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getArticlesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getFilteredArticlesThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getFilteredArticlesThunk.fulfilled, (state, action) => {
      state.filteredArticles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getFilteredArticlesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchArticlesThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchArticlesThunk.fulfilled, (state, action) => {
      state.searchedArticles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchArticlesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { setSearchedArticles} = catalogSlice.actions;

export default catalogSlice.reducer;
