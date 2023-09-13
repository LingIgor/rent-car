import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648af0c817f1536d65e9ff94.mockapi.io';

export const fetchCars = createAsyncThunk('cars/fetch', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/rent-car');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
