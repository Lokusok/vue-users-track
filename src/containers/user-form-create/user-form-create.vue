<script setup lang="ts">
import { defineProps } from 'vue';

import UserForm from '@/components/user-form/user-form.vue';
import { useUsersStore } from '@/store/users/users-store';

const props = defineProps<{
  submitText: string;
  defaultName?: string;
  defaultDescr?: string;
}>();

const usersStore = useUsersStore();

function onUserCreate(user: Omit<IUser, 'id'>) {
  usersStore.addUser(user);
}
</script>

<template>
  <UserForm
    @submit="onUserCreate"
    :defaultName="props.defaultName"
    :defaultDescr="props.defaultDescr"
    :submitText="props.submitText"
  />
</template>
