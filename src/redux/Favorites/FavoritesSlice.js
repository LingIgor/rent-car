import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    favoriteCars(state, { payload }) {
      return (state = [...state, payload]);
    },
    deleteFavoritesCars(state, { payload }) {
      return (state = state.filter(car => car.id !== payload));
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { favoriteCars, deleteFavoritesCars } = favoriteSlice.actions;
