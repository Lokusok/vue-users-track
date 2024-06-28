<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

import Button from '@/components/button/button.vue';

import { useUsersStore } from '@/store/users/users-store';

const props = defineProps<{
  user: IUser;
}>();

const emit = defineEmits<{
  (e: 'edit'): void;
}>();

const usersStore = useUsersStore();
const router = useRouter();

function onClickDelete() {
  usersStore.deleteUserById(props.user.id);
  router.replace({ name: 'main' });
}

function onEditClick() {
  emit('edit');
}
</script>

<template>
  <div class="line">
    <Button @click="onClickDelete">Удалить</Button>
    <Button @click="onEditClick">Изменить</Button>
  </div>
</template>

<style scoped lang="scss">
.line {
  display: flex;
  column-gap: 15px;
  justify-content: center;
  align-items: center;
}
</style>
