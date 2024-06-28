<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  user: IUser;
}>();
</script>

<template>
  <div class="wrapper">
    <p class="user-page__descr">{{ props.user.descr }}</p>

    <div v-if="$slots.default" class="additional">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-page__descr {
  font-size: 18px;
  text-align: center;
}

.user-page__footer {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  column-gap: 15px;
}

.additional {
  margin-top: 30px;
}
</style>
