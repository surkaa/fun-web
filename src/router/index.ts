import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/secret-choice',
    name: 'SecretChoice',
    component: () => import('../views/LoveConfession.vue'),
    meta: {
      title: '可以解锁我们的未来吗？🔓'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

// 导航守卫
router.beforeEach((to, _from, next) => {
  console.log(import.meta.env.VITE_BASE_URL);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;