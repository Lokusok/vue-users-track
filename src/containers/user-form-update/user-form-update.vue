<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

import UserForm from '@/components/user-form/user-form.vue';

import { apiService } from '@/services/api';

const props = defineProps<{
  user: IUser;
  submitText: string;
  defaultName?: string;
  defaultDescr?: string;
}>();

const emit = defineEmits<{
  (id: 'success'): void;
}>();

const waiting = ref(false);

async function onUserUpdate(user: Omit<IUser, 'id'>) {
  const updatedUser = {
    ...user,
    id: props.user.id,
  };

  waiting.value = true;
  await apiService.updateUser(updatedUser);
  waiting.value = false;

  emit('success');
}
</script>

<template>
  <UserForm
    @submit="onUserUpdate"
    :defaultName="props.defaultName"
    :defaultDescr="props.defaultDescr"
    :disableIfDefaults="true"
    :resetOnSubmit="false"
    :disableAll="waiting"
    :submitText="props.submitText"
  />
</template>
