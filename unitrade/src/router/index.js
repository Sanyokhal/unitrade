import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/components/AuthPage.vue";
import PostsList from "@/components/Posts_list.vue";
import UserProfile from "@/components/UserProfile.vue";

import store from "@/store";
import PostPage from "@/components/PostPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: PostsList,
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/me",
    name: "me",
    component: UserProfile,
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path:"/post/:id?",
    name:"post",
    component: PostPage,
    meta: {
      forLoggedIn: true,
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const nextRouteIsForLoggedIn = to.meta?.forLoggedIn;

  if (nextRouteIsForLoggedIn && !store.getters.isLoggedIn) {
    next("/auth");
  } else if (!nextRouteIsForLoggedIn && store.getters.isLoggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
