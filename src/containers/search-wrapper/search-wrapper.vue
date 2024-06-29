<script setup lang="ts">
import Search from '@/components/search/search.vue';

import { useUsersStore } from '@/store/users/users-store';
import { useOptionsStore } from '@/store/options/options-store';

const usersStore = useUsersStore();
const optionsStore = useOptionsStore();

function searchByQuery(searchQuery: string) {
  optionsStore.setSearchQuery(searchQuery);
  usersStore.searchByQuery(searchQuery);
}
</script>

<template>
  <Search @search="searchByQuery" />
</template>

<style scoped lang="scss"></style>
