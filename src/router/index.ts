import { createRouter, createWebHistory } from 'vue-router';

const IframePage = () => import('../pages/IframePage/index.vue');
const LeaferSpine = () => import('../pages/pluginPages/LeaferSpine/index.vue');
const LeaferBase = () => import('../pages/basePages/LeaferBase/index.vue');
const sandBoxTest = () => import('../pages/pluginPages/sandBoxTest/index.vue');
const sandBoxPlugin = () =>
  import('../pages/pluginPages/sandBoxPlugin/index.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/base',
      children: [
        {
          path: 'leafer-base',
          component: LeaferBase,
        },
      ],
    },
    {
      path: '/iframe-page',
      component: IframePage,
    },
    {
      path: '/plugin',
      children: [
        {
          path: 'leafer-spine',
          component: LeaferSpine,
        },
        {
          path: 'sand-box-test',
          component: sandBoxTest,
        },
        {
          path: 'sand-box-plugin',
          component: sandBoxPlugin,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/base/leafer-base',
    },
  ],
});

export default router;
