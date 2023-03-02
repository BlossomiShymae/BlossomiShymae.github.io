import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      alias: "/home",
    },
    {
      path: "/code-stuff",
      component: () => import("./views/CodeStuff.vue"),
    },
    {
      path: "/community",
      component: () => import("./views/Community.vue"),
    },
    {
      path: "/about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/mvvm",
      component: () => import("./views/MVVM.vue"),
    },
    {
      path: "/service-layer",
      component: () => import("./views/ServiceLayer.vue"),
    },
    {
      path: "/composition",
      component: () => import("./views/Composition.vue"),
    },
    {
      path: "/dependency-injection",
      component: () => import("./views/DependencyInjection.vue"),
    },
    {
      path: "/art",
      component: () => import("./views/Art.vue"),
    },
  ],
});

export default router;
