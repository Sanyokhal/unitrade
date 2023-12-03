import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/components/AuthPage.vue";
import PostsList from "@/components/Post/Posts_list.vue";
import UserProfile from "@/components/UserProfile.vue";
import store from "@/store";
import PostPage from "@/components/Post/PostPage.vue";
import WorkPage from "@/components/Work/WorkPage.vue";
import Works_list from "@/components/Work/Works_list.vue";
import About from "@/components/About.vue";

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
        path: "/post/:id?",
        name: "post",
        component: PostPage,
        meta: {
            forLoggedIn: true,
        },
    },
    {
        path: "/works",
        name: "works",
        component: Works_list,
        meta: {
            forLoggedIn: true,
        },
    },
    {
        path: "/work/:id?",
        name: "work",
        component: WorkPage,
        meta: {
            forLoggedIn: true,
        },
    },
    {
        path: "/about",
        name: "about",
        component: About,
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
