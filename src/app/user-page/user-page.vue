<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import UserActions from '@/containers/user-actions/user-actions.vue';
import UserFormUpdate from '@/containers/user-form-update/user-form-update.vue';

import Button from '@/components/button/button.vue';
import PageLayout from '@/components/page-layout/page-layout.vue';
import Title from '@/components/page-title/page-title.vue';
import UserInfo from '@/components/user-info/user-info.vue';

import { apiService } from '@/services/api';

const mode = ref<'view' | 'edit'>('view');

const route = useRoute();
const userId =
  typeof route.params.id === 'string' ? route.params.id : route.params.id[0];

const currentUser = ref(null);

onMounted(async () => {
  currentUser.value = await apiService.getUserById(userId);
});

function onEditEvent() {
  mode.value = mode.value === 'view' ? 'edit' : 'view';
}

function backToView() {
  mode.value = 'view';
}
</script>

<template>
  <PageLayout v-if="currentUser">
    <template #header>
      <Transition name="headers-elems" mode="out-in">
        <Title key="view-header" v-if="mode === 'view'">
          Просмотр пользователя <u>{{ currentUser.name }}</u>
        </Title>

        <Title key="edit-header" v-else-if="mode === 'edit'">
          Редактирование <u>{{ currentUser.name }}</u>
        </Title>
      </Transition>
    </template>

    <template #body>
      <Transition name="body-inner" mode="out-in">
        <UserInfo key="body-info" v-if="mode === 'view'" :user="currentUser">
          <UserActions @edit="onEditEvent" :user="currentUser" />
        </UserInfo>

        <div key="body-form-update" v-else-if="mode === 'edit'">
          <UserFormUpdate
            :user="currentUser"
            :defaultName="currentUser.name"
            :defaultDescr="currentUser.descr"
            @success="backToView"
            submitText="Обновить"
          />
          <div
            :style="{
              paddingTop: '30px',
              display: 'flex',
              justifyContent: 'center',
            }"
          >
            <Button @click="backToView">К просмотру</Button>
          </div>
        </div>
      </Transition>
    </template>
  </PageLayout>
</template>

<style scoped lang="scss">
.headers-elems-enter-active,
.headers-elems-leave-active {
  transition: all 0.4s ease;
}
.headers-elems-enter-from,
.headers-elems-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.body-inner-enter-active,
.body-inner-leave-active {
  transition: all 0.4s ease;
}
.body-inner-enter-from,
.body-inner-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
