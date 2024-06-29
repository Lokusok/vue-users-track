<script setup lang="ts">
import Search from '@/components/search/search.vue';

import { useUsersStore } from '@/store/users/users-store';

const usersStore = useUsersStore();

function searchByQuery(searchQuery: string) {
  usersStore.searchByQuery(searchQuery);
}
</script>

<template>
  <Search @search="searchByQuery" />
</template>

<style scoped lang="scss"></style>
