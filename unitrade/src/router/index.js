import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/components/AuthPage.vue";

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
