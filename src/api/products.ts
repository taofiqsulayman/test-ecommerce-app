import axios from 'axios';

export const fetchProducts = async ({ pageParam = 1, limit = 8 }) => {
  const skip = (pageParam - 1) * limit;
  const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  return response.data;
};