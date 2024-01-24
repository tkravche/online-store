import { createSlice } from '@reduxjs/toolkit';
import { IArticlesData, getArticlesThunk } from '../../thunks/catalog';

type catalogState = {
  articles: IArticlesData;
  isLoading: boolean;
  error: string | null;
}
const initialState: catalogState = {
  articles: {items: [],links: {},meta: {}},
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticlesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getArticlesThunk.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getArticlesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// export const { } = catalogSlice.actions;

export default catalogSlice.reducer;
