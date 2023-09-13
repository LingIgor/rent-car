import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './Operations';

const initialState = {
  cars: [],
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.cars = payload;
    });
  },
});

export const carsReducer = carsSlice.reducer;
