import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/CarsSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
