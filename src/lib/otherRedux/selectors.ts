export const selectSearchOpen = state => state.headerSearch.isSearchOpen;
export const selectAuthOpen = state => state.ui.isAuthOpen;

export const selectAccessToken = state => state.auth.accessToken;
export const selectIsLogged = state => state.auth.isLogged;
export const selectIsLoading = state => state.auth.isLoading;

export const selectCurrentUser = state => state.user.currentUser?.data;
export const selectCurrentUserCart = state =>
  state.user.currentUserCart?.data?.items;
export const selectCart = state => state.user.cart;
export const selectFavorites = state => state.user.currentUser?.data?.favorites;

export const selectArticles = state => state.catalog?.articles.data?.items;
export const selectTotalPages = state =>state.catalog?.articles.data?.meta.itemCount;
