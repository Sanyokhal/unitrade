import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/components/AuthPage.vue";
import UserProfile from "@/components/UserProfile.vue";
// import store from "@/store";
// import PostPage from "@/components/Post/PostPage.vue";
// import WorkPage from "@/components/Work/WorkPage.vue";
// import Works_list from "@/components/Work/Works_list.vue";
import Token from "@/token-usage.js";
import Main_Page from "@/components/Main_Page.vue";
import Info from "@/components/Info.vue";

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
        meta: {
            forLoggedIn: false,
        },
    },
    {
        path: "/info",
        name: "info",
        component: Info,
        meta: {
            forLoggedIn: false,
        },
    },
    {
        path: "/posts",
        name: "posts",
        component: () => import("@/components/Post/Posts_list.vue"),
        meta: {
            forLoggedIn: true,
        }
    },
    {
        path: "/posts/:id",
        name: "post",
        component: () => import("@/components/Post/PostPage.vue"),
        meta: {
            forLoggedIn: true,
        },
    },
    {
        path: "/works",
        name: "works",
        component: ()=> import("@/components/Work/Works_list.vue"),
        meta: {
            forLoggedIn: true,
        },
    },
    {
        path: "/works/:id",
        name: "work",
        component: () => import("@/components/Work/WorkPage.vue"),
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const accessToken = Token.getAccessTokenFromCookie();
    const nextRouteIsForLoggedIn = to.meta?.forLoggedIn;

    if (nextRouteIsForLoggedIn && !accessToken) {
        next("/auth");
    } else {
        next();
    }
});

export default router;
