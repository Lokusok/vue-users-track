import axios from 'axios';

import { BASE_API_URL } from '..';
import type { IPaginationResponse } from './types';

export const BASE_API_URL_USERS = `${BASE_API_URL}/users`;

const apiInstance = axios.create({
  baseURL: BASE_API_URL_USERS,
});

export const handlers = {
  getAllUsers: async () => {
    const response = await apiInstance.get<IPaginationResponse<IUser>>('');
    console.log('getAllUsers', response);
    return response.data;
  },
  getUsersByPage: async (page: number) => {
    console.log('getUsersByPage:', page);
    const response = await apiInstance.get<IPaginationResponse<IUser>>('', {
      params: {
        page,
      },
    });
    return response.data;
  },
  searchByQuery: async (searchQuery: string) => {
    const response = await apiInstance.get<IPaginationResponse<IUser>>('', {
      params: {
        search: searchQuery,
      },
    });
    console.log('searchByQuery:', response);
    return response.data;
  },
};
