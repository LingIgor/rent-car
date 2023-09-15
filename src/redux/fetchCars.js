import axios from 'axios';

const BASE_URL =  "https://648af0c817f1536d65e9ff94.mockapi.io";

export const  fetchCars =  async ()  => {
  try {    
    const {data} = await axios.get(`${BASE_URL}/cars`);
  
    return data;
  } catch (error) {
    console.error( error);
    
  }
}


