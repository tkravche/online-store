import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchOpen: false,
};

export const headerSlice = createSlice({
  name: 'headerSeach',
  initialState,
  reducers: {
    setHeaderSearch: (state, { payload }) => {
      state.isSearchOpen = payload;
    },
  },
});

export const { setHeaderSearch } = headerSlice.actions;
export default headerSlice.reducer;
