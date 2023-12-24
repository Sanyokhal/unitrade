import { createRouter, createWebHistory } from "vue-router";

import AuthPage from "@/components/AuthPage.vue";
// import UserProfile from "@/components/UserProfile.vue";
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
    component: () => import("@/components/Info/Info.vue"),
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/info/create",
    name: "infoCreate",
    component: () => import("@/components/Info/InfoCreate.vue"),
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/info/:id/edit",
    name: "infoEdit",
    component: () => import("@/components/Info/InfoEdit.vue"),
    meta: {
      forLoggedIn: true,
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
    name: "postCreate",
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
    path: "/posts/:id/edit",
    name: "postEdit",
    component: () => import("@/components/Post/PostEditPage.vue"),
    meta: {
      forLoggedIn: true,
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
    path: "/works/:id/edit",
    name: "workEdit",
    component: () => import("@/components/Work/WorkEditPage.vue"),
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/works/create",
    name: "workCreate",
    component: () => import("@/components/Work/WorkCreatePage.vue"),
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/me",
    name: "me",
    component: () => import("@/components/UserProfile.vue"),
    meta: {
      forLoggedIn: true,
    },
  },
  {
    path: "/about-us",
    name: "aboutUs",
    component: () => import("@/components/additionalInfo/AboutUsPage.vue"),
    meta: {
      forLoggedIn: false,
    },
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("@/components/additionalInfo/RulesPage.vue"),
    meta: {
      forLoggedIn: false,
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
