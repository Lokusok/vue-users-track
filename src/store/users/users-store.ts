import { defineStore } from 'pinia';
import { handlers } from '@/api/users';

export const useUsersStore = defineStore('users', {
  state: () => ({
    waiting: true,
    users: [] as IUser[],
  }),
  actions: {
    async fetchAllUsers() {
      this.waiting = true;

      const users = await handlers.getAllUsers();
      this.users = users;

      this.waiting = false;
    },
    async searchByQuery(searchQuery: string) {
      this.waiting = true;

      console.log('[Users store] searchByQuery, ', searchQuery);
      const users = await handlers.searchByQuery(searchQuery);
      this.users = users;

      this.waiting = false;
    },

    addUser(user: Omit<IUser, 'id'>) {
      const createdUser = {
        ...user,
        id: crypto.randomUUID(),
      };
      this.users.push(createdUser);
    },
    getUserById(userId: IUser['id']) {
      return this.users.find((user) => user.id === userId);
    },
    deleteUserById(userId: IUser['id']) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
    updateUserById(userId: IUser['id'], user: Omit<IUser, 'id'>) {
      const findIndex = this.users.findIndex((user) => user.id === userId);

      if (findIndex !== -1) {
        this.users[findIndex] = {
          id: userId,
          ...user,
        };
      }
    },
  },
});
