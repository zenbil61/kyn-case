import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Detail from './pages/Detail.vue';
import List from './pages/List.vue';

import { ROUTE } from './constant';
const routes = [
  { path: '/', component: Home },
  { path: ROUTE.PAGE_JOBS, component: List },
  {
    path: ROUTE.PAGE_JOBS_DETAIL,
    component: Detail,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
