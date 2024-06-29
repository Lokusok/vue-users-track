import { handlers } from '@/api/users';

import { useUsersStore } from '@/store/users/users-store';
import { useOptionsStore } from '@/store/options/options-store';

import type { ISearchByOptions } from '@/types';

export const apiService = {
  createUser: async (user: Omit<IUser, 'id'>) => {
    const optionsStore = useOptionsStore();

    await handlers.createUser(user);
    apiService.searchBy({
      page: optionsStore.currentPage,
    });
  },
  deleteUserById: async (userId: IUser['id']) => {
    await handlers.deleteUser(userId);

    const usersStore = useUsersStore();
    const optionsStore = useOptionsStore();

    usersStore.setWaiting(true);

    const response = await handlers.searchBy({
      page: optionsStore.currentPage,
    });

    if (optionsStore.currentPage > 1 && response.data.length === 0) {
      optionsStore.setCurrentPage(optionsStore.currentPage - 1);
      apiService.deleteUserById(userId);
      return;
    }

    usersStore.setUsers(response.data);
    optionsStore.setMaxPage(response.maxPage);
    optionsStore.setPerPage(response.perPage);

    usersStore.setWaiting(false);
  },
  searchBy: async (options: ISearchByOptions) => {
    const usersStore = useUsersStore();
    const optionsStore = useOptionsStore();

    usersStore.setWaiting(true);

    const response = await handlers.searchBy(options);

    usersStore.setUsers(response.data);
    optionsStore.setMaxPage(response.maxPage);
    optionsStore.setPerPage(response.perPage);

    usersStore.setWaiting(false);
  },
  updateUser: async (user: IUser) => {
    const usersStore = useUsersStore();

    usersStore.setWaiting(true);

    const updatedUser = await handlers.updateUser(user);

    usersStore.updateUserById(updatedUser.id, updatedUser);

    usersStore.setWaiting(false);
  },
};
