import { defineStore } from 'pinia';

export const useOptionsStore = defineStore('options', {
  state: () => ({
    currentPage: 1,
    maxPage: null as null | number,
    perPage: null as null | number,
    searchQuery: '',
  }),
  actions: {
    setCurrentPage(page: number) {
      console.log({ page });
      this.currentPage = page;
    },
    setSearchQuery(searchQuery: string) {
      this.searchQuery = searchQuery;
    },
    setMaxPage(maxPage: number) {
      this.maxPage = maxPage;
    },
    setPerPage(perPage: number) {
      this.perPage = perPage;
    },
  },
});
