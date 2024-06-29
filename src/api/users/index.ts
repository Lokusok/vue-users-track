import { BASE_API_URL } from '..';
import axios from 'axios';

export const BASE_API_URL_USERS = `${BASE_API_URL}/users`;

const apiInstance = axios.create({
  baseURL: BASE_API_URL_USERS,
});

export const handlers = {
  getAllUsers: async () => {
    const response = await apiInstance.get<IUser[]>('');
    console.log('getAllUsers', response);
    return response.data;
  },
  searchByQuery: async (searchQuery: string) => {
    const response = await apiInstance.get<IUser[]>('', {
      params: {
        search: searchQuery,
      },
    });
    console.log('searchByQuery:', response);
    return response.data;
  },
};
