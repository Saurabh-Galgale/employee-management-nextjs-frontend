import { configureStore } from '@reduxjs/toolkit';
import favoriteUserReducer from './slices/favoriteUserSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
