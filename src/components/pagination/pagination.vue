<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import PaginationItem from './pagination-item/pagination-item.vue';

const props = defineProps<{
  maxPage: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (e: 'pageChange', value: number): void;
}>();

function emitPageChangeEvent(page: number) {
  emit('pageChange', page);
}
</script>

<template>
  <div class="pagination-list">
    <PaginationItem
      v-for="order of props.maxPage"
      @click="emitPageChangeEvent(order)"
      :asLink="true"
      :isActive="order === currentPage"
      :order="order"
      :key="order"
    />
  </div>
</template>

<style scoped lang="scss">
.pagination-list {
  display: flex;
  column-gap: 10px;
}
</style>
