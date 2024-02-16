import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToCartThunk,
  addReviewThunk,
  addToFavoritesThunk,
  currentUserThunk,
  editReviewThunk,
  getCartItemsThunk,
  removeFromFavoritesThunk,
  removeItemFromCartThunk,
} from '../../thunks/user';
// import type { PayloadAction } from '@reduxjs/toolkit';

// // Define a type for the slice state
// export interface ICurrentUser {
//   currentUser: object | null,
//   reviews: [],
//   cart: [],
//   temporaryCart: [],
//   isLoading: boolean,
//   error: string | null,
// }

// Define the initial state using that type
const initialState = {
  currentUser: null,
  reviews: [],
  cart: [],
  temporaryCart: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToTemporaryCart: (state, { payload }) => {
      let newCart = [...state.temporaryCart];
      const found = state.temporaryCart.find(({ id }) => id === payload.id);
      console.log(payload.id);

      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }
      state.temporaryCart = newCart;
    },
    removeItemFromTemporaryCart: (state, { payload }) => {
      state.temporaryCart = state.temporaryCart.filter(
        ({ id }) => id !== payload
      );
    },
    logoutCurrentUser: state => {
      state.currentUser = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(currentUserThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(currentUserThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addToFavoritesThunk.pending, state => {
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
    builder.addCase(removeFromFavoritesThunk.pending, state => {
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
    builder.addCase(addReviewThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addReviewThunk.fulfilled, (state, action) => {
      state.reviews = [...state.reviews, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addReviewThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(editReviewThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(editReviewThunk.fulfilled, (state, action) => {
      state.reviews = [...state.reviews, action.payload];
      state.isLoading = false;
    });
    builder.addCase(editReviewThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getCartItemsThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getCartItemsThunk.fulfilled, (state, action) => {
      state.cart = action.payload.items;
      state.isLoading = false;
    });
    builder.addCase(getCartItemsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addItemToCartThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addItemToCartThunk.fulfilled, (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addItemToCartThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(removeItemFromCartThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(removeItemFromCartThunk.fulfilled, (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    });
    builder.addCase(removeItemFromCartThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  addItemToTemporaryCart,
  removeItemFromTemporaryCart,
  logoutCurrentUser,
} = userSlice.actions;

export default userSlice.reducer;
