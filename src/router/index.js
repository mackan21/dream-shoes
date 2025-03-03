import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/allshoes",
      name: "allshoes",
      component: () => import("../views/AllShoesView.vue"),
    },
    {
      path: "/womenshoes",
      name: "womenshoes",
      component: () => import("../views/WomenShoesView.vue"),
    },
    {
      path: "/kidshoes",
      name: "kidshoes",
      component: () => import("../views/KidShoesView.vue"),
    },
    {
      path: "/menshoes",
      name: "menshoes",
      component: () => import("../views/MenShoesView.vue"),
    },
  ],
});

export default router;
