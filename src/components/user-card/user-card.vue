<script setup lang="ts">
import { defineProps } from 'vue';

import Button from '@/components/button/button.vue';

const props = defineProps<{
  user: IUser;
}>();
</script>

<template>
  <article class="user-card">
    <h3 class="user-card__title">{{ props.user.name }}</h3>

    <p class="user-card__descr">
      {{ props.user.descr }}
    </p>

    <Button :to="{ name: 'user', params: { id: props.user.id } }"
      >Просмотреть</Button
    >
  </article>
</template>

<style lang="scss" scoped>
.user-card {
  padding: 3rem 2rem;
  border: 2px solid var(--accent-color-1);
  border-radius: 6px;

  &__title {
    font-size: 22px;
    margin-bottom: 5px;
  }

  &__descr {
    font-size: 18px;
    margin-bottom: 25px;
    word-break: break-all;
  }
}
</style>
