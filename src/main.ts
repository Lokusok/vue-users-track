import './index.scss';

import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';

import VueSkeletonLoader from 'skeleton-loader-vue';

import App from './app/app.vue';

import MainPage from './app/main-page/main-page.vue';
import CreatePage from './app/create-page/create-page.vue';
import UserPage from './app/user-page/user-page.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/list/:page?',
    name: 'list',
    component: MainPage,
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePage,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);

app.component('vue-skeleton-loader', VueSkeletonLoader);

app.use(router);
app.use(pinia);

app.mount('#app');
