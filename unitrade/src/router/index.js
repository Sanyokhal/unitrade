import { createRouter, createWebHistory } from "vue-router";

import AuthPage from "@/components/AuthPage.vue";
import UserProfile from "@/components/UserProfile.vue";
import Main_Page from "@/components/Main_Page.vue";

import Token from "@/token-usage.js";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main_Page,
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
    props: true,
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/info",
    name: "info",
    component: () => import("@/components/Info.vue"),
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("@/components/Post/Posts_list.vue"),
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/posts/create",
    name: "postsCreate",
    component: () => import("@/components/Post/PostCreatePage.vue"),
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/posts/:id",
    name: "post",
    component: () => import("@/components/Post/PostPage.vue"),
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/works",
    name: "works",
    component: () => import("@/components/Work/Works_list.vue"),
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/works/:id",
    name: "work",
    component: () => import("@/components/Work/WorkPage.vue"),
    meta: {
      forLoggedIn: false,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const accessToken = Token.getAccessTokenFromCookie();
  const nextRouteIsForLoggedIn = to.meta?.forLoggedIn;

  if (nextRouteIsForLoggedIn && !accessToken) {
    next({ path: "/auth", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
