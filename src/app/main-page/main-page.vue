<script setup>
import PageLayout from '@/components/page-layout/page-layout.vue';
import Title from '@/components/page-title/page-title.vue';
import UserCard from '@/components/user-card/user-card.vue';
import NoUsersNotifier from '@/components/no-users-notifier/no-users-notifier.vue';
import Search from '@/components/search/search.vue';
import Pagination from '@/components/pagination/pagination.vue';

import { useUsersStore } from '@/store/users/users-store.ts';

const usersStore = useUsersStore();
</script>

<template>
  <PageLayout>
    <template #header>
      <Title>Главная. Список всех пользователей</Title>
      <div
        :style="{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15px',
        }"
      >
        <Search />
      </div>
    </template>

    <template #body>
      <div class="content-row" v-if="usersStore.users.length > 0">
        <div class="grid">
          <UserCard
            v-for="user of usersStore.users"
            :key="user.id"
            :user="user"
          />
        </div>

        <Pagination />
      </div>

      <NoUsersNotifier v-else />
    </template>
  </PageLayout>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.content-row {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
}
</style>
