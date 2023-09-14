import axios from 'axios';

const API_BASE_URL = 'https://648af0c817f1536d65e9ff94.mockapi.io';

export const fetchCars = async (page) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars?p=${page}&l=8`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

