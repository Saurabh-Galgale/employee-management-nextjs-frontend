import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  count: number;
  favoriteUsers: string[]; 
}

const initialState: FavoriteState = {
  count: 0,
  favoriteUsers: [],
};

const favoriteUserSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteUsers.push(action.payload);
      state.count += 1;
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteUsers = state.favoriteUsers.filter(
        (user) => user.id !== action.payload
      );
      state.count -= 1;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteUserSlice.actions;
export default favoriteUserSlice.reducer;
