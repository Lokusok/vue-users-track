<script setup lang="ts">
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="search">
    <Search class="search__icon" color="#ddd" :size="24" />
    <input class="search__input" type="text" placeholder="Поиск" />
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
