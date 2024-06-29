<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  isActive?: boolean;
  order: number;
}>();
</script>

<template>
  <button
    class="pagination-item"
    :class="{
      active: props.isActive,
    }"
  >
    {{ props.order }}
  </button>
</template>

<style scoped lang="scss">
.pagination-item {
  appearance: none;
  border: none;
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

  &:active {
    opacity: 0.5;
  }
}
</style>
