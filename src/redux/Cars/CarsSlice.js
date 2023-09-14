import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './Operations';



export const carsSlice = createSlice({
  name: 'cars',
  initialState:[],
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state = payload
    });
  },
});

export const carsReducer = carsSlice.reducer;
