<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  to?: string | object;
}>();

const emit = defineEmits<{
  (e: 'click');
}>();

const type = computed(() => {
  if (props.to) {
    return 'router-link';
  }

  return 'button';
});

function onClick() {
  emit('click');
}
</script>

<template>
  <component @click="onClick" :is="type" :to="to" class="btn">
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.btn {
  padding: 10px 25px;
  background: var(--accent-color-1);
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
