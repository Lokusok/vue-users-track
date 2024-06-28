<script setup>
import PageLayout from '@/components/page-layout/page-layout.vue';
import Title from '@/components/page-title/page-title.vue';
import UserFormCreate from '@/containers/user-form-create/user-form-create.vue';
</script>

<template>
  <PageLayout>
    <template #header>
      <Title>Создать пользователя</Title>
    </template>

    <template #body>
      <UserFormCreate submitText="Создать" />
    </template>
  </PageLayout>
</template>
