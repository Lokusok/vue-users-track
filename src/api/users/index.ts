import axios from 'axios';

import { BASE_API_URL } from '..';
import type { IPaginationResponse } from './types';
import type { ISearchByOptions } from '@/types';

export const BASE_API_URL_USERS = `${BASE_API_URL}/users`;

const apiInstance = axios.create({
  baseURL: BASE_API_URL_USERS,
});

export const handlers = {
  searchBy: async (options: ISearchByOptions) => {
    const response = await apiInstance.get<IPaginationResponse<IUser>>('', {
      params: {
        search: options.searchQuery,
        page: options.page,
      },
    });
    console.log('searchBy:', response);
    return response.data;
  },
  createUser: async (user: Omit<IUser, 'id'>) => {
    const response = await apiInstance.post<IUser>('', user);
    console.log('createUser:', response);
    return response.data;
  },
  deleteUser: async (userId: IUser['id']) => {
    const response = await apiInstance.delete<IUser>(userId);
    return response.data;
  },
  updateUser: async (user: IUser) => {
    const response = await apiInstance.put<IUser>(`/${user.id}`, user);
    return response.data;
  },
};
