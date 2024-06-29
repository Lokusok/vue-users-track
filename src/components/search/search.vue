<script setup lang="ts">
import { defineEmits, ref, onUnmounted } from 'vue';
import { Search } from 'lucide-vue-next';

const emit = defineEmits<{
  (e: 'search', value: string): void;
}>();

const searchQuery = ref('');
let timeout: number | null = null;

function emitSearchEvent() {
  emit('search', searchQuery.value);
}

function listenInput() {
  if (timeout !== null) clearTimeout(timeout);

  timeout = setTimeout(() => {
    emitSearchEvent();
  }, 500);
}

onUnmounted(() => {
  if (timeout !== null) clearTimeout(timeout);
});
</script>

<template>
  <div class="search">
    <Search class="search__icon" color="#ddd" :size="24" />
    <input
      v-model.trim="searchQuery"
      @keydown.enter="emitSearchEvent"
      @input="listenInput"
      class="search__input"
      type="text"
      placeholder="Поиск"
    />
  </div>
</template>

<style scoped lang="scss">
.search {
  position: relative;

  &__input {
    padding: 5px 15px;
    border: 2px solid #ddd;
    border-radius: 6px;
    padding-left: 30px;
  }

  &__icon {
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-55%);
  }
}
</style>
