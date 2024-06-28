<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

import UserForm from '@/components/user-form/user-form.vue';
import { useUsersStore } from '@/store/users/users-store';

const props = defineProps<{
  user: IUser;
  submitText: string;
  defaultName?: string;
  defaultDescr?: string;
}>();

const emit = defineEmits<{
  (id: 'success'): void;
}>();

const usersStore = useUsersStore();

function onUserUpdate(user: Omit<IUser, 'id'>) {
  usersStore.updateUserById(props.user.id, user);
  emit('success');
}
</script>

<template>
  <UserForm
    @submit="onUserUpdate"
    :defaultName="props.defaultName"
    :defaultDescr="props.defaultDescr"
    :disableIfDefaults="true"
    :submitText="props.submitText"
  />
</template>
