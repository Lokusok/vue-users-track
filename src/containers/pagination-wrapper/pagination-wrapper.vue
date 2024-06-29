<script setup lang="ts">
import { defineProps } from 'vue';

import Pagination from '@/components/pagination/pagination.vue';

import { useOptionsStore } from '@/store/options/options-store';

const props = defineProps<{
  maxPage: number;
  currentPage: number;
}>();

const optionsStore = useOptionsStore();

function changeCurrentPage(page: number) {
  optionsStore.setCurrentPage(page);
}
</script>

<template>
  <Pagination
    @pageChange="changeCurrentPage"
    :maxPage="props.maxPage"
    :currentPage="props.currentPage"
  />
</template>

<style scoped lang="scss"></style>
