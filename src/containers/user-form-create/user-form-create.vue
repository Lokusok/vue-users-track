<script setup lang="ts">
import { defineProps } from 'vue';

import UserForm from '@/components/user-form/user-form.vue';
import { apiService } from '@/services/api';

const props = defineProps<{
  submitText: string;
  defaultName?: string;
  defaultDescr?: string;
}>();

function onUserCreate(user: Omit<IUser, 'id'>) {
  apiService.createUser(user);
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
