import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Editor from "../views/Editor.vue";
import Done from "../views/Done.vue";

export const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/editor",
        component: Editor,
    },
    {
        path: "/done",
        component: Done
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes, 
})

export default router;