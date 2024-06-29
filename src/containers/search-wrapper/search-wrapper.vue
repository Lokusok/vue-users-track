<script setup lang="ts">
import Search from '@/components/search/search.vue';

import { useOptionsStore } from '@/store/options/options-store';

const optionsStore = useOptionsStore();

function searchByQuery(searchQuery: string) {
  optionsStore.setSearchQuery(searchQuery);
}
</script>

<template>
  <Search @search="searchByQuery" />
</template>

<style scoped lang="scss"></style>
