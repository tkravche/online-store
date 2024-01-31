import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './slice/auth';
import userSlice from './slice/user';
import headerSlice from './slice/header';
import uiSlice from './slice/ui';
import catalogSlice from './slice/catalog';

const persistConfig = {
  key: 'data',
  version: 1,
  storage,
  whitelist: ['accessToken','refreshToken','isLogged'],
};

export const otherStore = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    user: userSlice,
    headerSearch: headerSlice,
    ui: uiSlice,
    catalog: catalogSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type AppDispatch = typeof otherStore.dispatch;
export type RootState = ReturnType<typeof otherStore.getState>;

export const persistor = persistStore(otherStore);;
