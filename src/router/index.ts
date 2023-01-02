import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Editor from "../views/Editor.vue";

export const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/editor",
        component: Editor,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes, 
})

export default router;