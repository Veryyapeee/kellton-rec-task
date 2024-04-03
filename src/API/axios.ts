import axios from 'axios';
import {API_KEY, API_URL} from 'react-native-dotenv';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `key ${API_KEY}`,
  },
});
