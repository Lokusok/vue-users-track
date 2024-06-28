<script setup>
import Header from '@/components/header/my-header.vue';
import Container from '@/components/container/container.vue';
</script>

<template>
  <Header />

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="router-outlet" mode="out-in">
        <Container :key="$route.path">
          <component :is="Component"></component>
        </Container>
      </Transition>
    </template>
  </RouterView>
</template>

<style lang="scss" scoped>
.router-outlet-enter-active,
.router-outlet-leave-active {
  transition: opacity 0.3s ease;
}

.router-outlet-enter-from,
.router-outlet-leave-to {
  opacity: 0;
}
</style>
