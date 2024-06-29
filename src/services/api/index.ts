import { handlers } from '@/api/users';

import { useUsersStore } from '@/store/users/users-store';
import { useOptionsStore } from '@/store/options/options-store';

export const apiService = {
  fetchUsersByPage: async (page: number) => {
    console.log('ApiService fetchUsersByPage');
    const usersStore = useUsersStore();
    const optionsStore = useOptionsStore();

    const response = await handlers.getUsersByPage(page);

    usersStore.setUsers(response.data);
    optionsStore.setMaxPage(response.maxPage);
    optionsStore.setPerPage(response.perPage);
  },
};
