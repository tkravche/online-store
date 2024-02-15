import { createSlice } from '@reduxjs/toolkit';
import {
  addReviewThunk,
  addToFavoritesThunk,
  currentUserThunk,
  editReviewThunk,
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
  currentUser: null,
  reviews: [],
  currentUserCart: {},
  temporaryCart: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.temporaryCart];
      const found = state.temporaryCart.find(({ id }) => id === payload.id);
      console.log(found);

      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
        state.temporaryCart = newCart;
      }
    },
    removeItemFromCart: (state, { payload }) => {
      state.temporaryCart = state.temporaryCart.filter(({ id }) => id !== payload);
    },
    logoutCurrentUser: state => {
      state.currentUser = null;
      state.error=null;
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
    builder.addCase(getCurrentUserCartThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentUserCartThunk.fulfilled, (state, action) => {
      state.currentUserCart = action.payload;
    });
    builder.addCase(getCurrentUserCartThunk.rejected, (state, action) => {
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
      state.reviews = [action.payload, ...state.reviews];
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
      state.reviews = [action.payload, ...state.reviews];
      state.isLoading = false;
    });
    builder.addCase(editReviewThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addItemToCart, removeItemFromCart, logoutCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;
