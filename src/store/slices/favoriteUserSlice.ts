import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@/app/page';

interface FavoriteState {
  count: number;
  favoriteUsers: UserType[]; 
}

const initialState: FavoriteState = {
  count: 0,
  favoriteUsers: [],
};

const favoriteUserSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<UserType>) => {
      if(!state.favoriteUsers.some((user) => user.id === action.payload.id)) {
        state.favoriteUsers.push(action.payload);
      state.count += 1;
      }
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
