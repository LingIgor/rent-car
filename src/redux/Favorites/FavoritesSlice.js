import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoriteCars(state, { payload }) {
      state.favorite = payload;
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { favoriteCars } = favoriteSlice.actions;
