import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      alias: "/home"
    },
    {
      path: "/code-stuff",
      component: () => import("./views/CodeStuff.vue"),
    },
    {
      path: "/community",
      component: () => import("./views/Community.vue"),
    }
  ]
});

export default router;