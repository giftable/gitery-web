import { RouteConfig } from 'vue-router';

const route: RouteConfig = {
  path: '/login',
  name: 'Login',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
};

export default route;
