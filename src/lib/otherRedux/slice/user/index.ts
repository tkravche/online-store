import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavoritesThunk,
  currentUserThunk,
  getCurrentUserCartThunk,
  removeFromFavoritesThunk,
} from '../../thunks/user';
// import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
// interface ICurrentUser {
//   currentUser: object | null,
//   cart: [],
//   isLoading: boolean,
//   isOnline: boolean,
//   error: string | null,
// }

// Define the initial state using that type
const initialState = {
  currentUser: {},
  currentUserCart: {},
  cart: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);
      console.log(found);

      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
        state.cart = newCart;
      }
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(currentUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(currentUserThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCurrentUserCartThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentUserCartThunk.fulfilled, (state, action) => {
      state.currentUserCart = action.payload;
    });
    builder.addCase(getCurrentUserCartThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addToFavoritesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addToFavoritesThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addToFavoritesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(removeFromFavoritesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeFromFavoritesThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(removeFromFavoritesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addItemToCart, removeItemFromCart } = userSlice.actions;

export default userSlice.reducer;
