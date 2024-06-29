<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item">
            <RouterLink
              :to="{
                name: 'list',
                params: {
                  page: 1,
                },
              }"
              class="nav__list-link"
              :class="{
                active: route.path === '/',
              }"
              >Главная</RouterLink
            >
          </li>
          <li class="nav__list-item">
            <RouterLink to="/create" class="nav__list-link">Создать</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--accent-color-1);
  padding: 1.8rem 0;
  color: #fff;
}

.nav__list {
  display: flex;
  list-style-type: none;
  gap: 30px;
  justify-content: center;
}

.nav__list-link {
  font-size: 24px;
  color: #fff;
  text-decoration: none;

  &.router-link-active,
  &.active {
    opacity: 0.5;
    text-decoration: underline;
  }

  &:hover:not(&.active) {
    opacity: 0.9;
    text-decoration: underline;
  }
}
</style>
