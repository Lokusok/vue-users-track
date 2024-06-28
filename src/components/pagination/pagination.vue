<script setup lang="ts">
import PaginationItem from './pagination-item/pagination-item.vue';
</script>

<template>
  <div class="pagination-list">
    <PaginationItem :isActive="true" :order="1" />
    <PaginationItem :order="2" />
    <PaginationItem :order="3" />
    <PaginationItem :order="4" />
  </div>
</template>

<style scoped lang="scss">
.pagination-list {
  display: flex;
  column-gap: 10px;
}
</style>
