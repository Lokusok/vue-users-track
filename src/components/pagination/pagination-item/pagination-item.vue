<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  isActive?: boolean;
  order: number;
}>();
</script>

<template>
  <div
    class="pagination-item"
    :class="{
      active: props.isActive,
    }"
  >
    {{ props.order }}
  </div>
</template>

<style scoped lang="scss">
.pagination-item {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  background: rgb(0, 128, 128, 1);
  transition:
    opacity ease 0.2s,
    background ease 0.2s;

  &.active {
    background: rgb(0, 68, 70, 1);
  }

  &:hover {
    opacity: 0.7;
  }
}
</style>
