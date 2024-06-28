import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [
      {
        id: 'fgfsdgsd',
        name: 'John Doe',
        descr:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, adipisci.',
      },
      {
        id: 'fgfsdsdfgsd',
        name: 'Ada Doe',
        descr:
          'Ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, adipisci.',
      },
      {
        id: 'fgfsgdfgdgsd',
        name: 'Hope Doe',
        descr: 'Lorem consectetur, adipisicing elit. Aperiam, adipisci.',
      },
    ],
  }),
  actions: {
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
