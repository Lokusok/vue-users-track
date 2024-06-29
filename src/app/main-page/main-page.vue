<script setup>
import { watch, computed, onMounted } from 'vue';

import SearchWrapper from '@/containers/search-wrapper/search-wrapper.vue';
import PaginationWrapper from '@/containers/pagination-wrapper/pagination-wrapper.vue';

import PageLayout from '@/components/page-layout/page-layout.vue';
import Title from '@/components/page-title/page-title.vue';
import UserCard from '@/components/user-card/user-card.vue';
import NoUsersNotifier from '@/components/no-users-notifier/no-users-notifier.vue';
import Skeleton from '@/components/skeleton/skeleton.vue';

import { useUsersStore } from '@/store/users/users-store.ts';
import { useOptionsStore } from '@/store/options/options-store.ts';

import { apiService } from '@/services/api';

const usersStore = useUsersStore();
const optionsStore = useOptionsStore();

const isPaginationVisible = computed(() => {
  return optionsStore.maxPage !== 1;
});

onMounted(() => {
  if (usersStore.users.length === 0) {
    apiService.searchBy({
      page: optionsStore.currentPage,
    });
  }
});

watch(
  () => [optionsStore.currentPage, optionsStore.searchQuery],
  async () => {
    apiService.searchBy({
      page: optionsStore.currentPage,
      searchQuery: optionsStore.searchQuery,
    });
  },
);
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
        <SearchWrapper />
      </div>
    </template>

    <template #body>
      <div
        class="content-row"
        v-if="usersStore.waiting || usersStore.users.length > 0"
      >
        <template v-if="!usersStore.waiting && usersStore.users.length > 0">
          <div class="grid">
            <UserCard
              v-for="user of usersStore.users"
              :key="user.id"
              :user="user"
            />
          </div>

          <PaginationWrapper
            v-if="isPaginationVisible"
            :maxPage="optionsStore.maxPage"
            :currentPage="optionsStore.currentPage"
          />
        </template>

        <div v-else-if="usersStore.waiting" class="grid">
          <Skeleton v-for="n in 4" :key="n" />
        </div>
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
  grid-auto-rows: 200px;
  width: 100%;
}

.content-row {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
}
</style>
