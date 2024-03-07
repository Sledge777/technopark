import { createRouter, createWebHistory } from "vue-router";
import createUser from "@/pages/createUser.vue";
import getRole from "@/pages/getRole.vue";
import getUsers from "@/pages/getUsers.vue";
import adminPanel from "@/pages/adminPanel.vue";
import reg from "@/pages/reg.vue";
import login from "@/pages/login.vue";
import main from "@/pages/main.vue";

const routes = [
    {
        path: '/',
        component: main, 
    },
    {
        path:'/login',
        component: login,
    },
    {
        path: '/reg',
        component: reg,
    },
    {
        path: '/admin',
        component: adminPanel,
    },
    {
        path: '/CreateUser',
        component: createUser,
    },
    {
        path: '/GetAllUsers',
        component:getUsers,
    },
    {
        path:'/GetRole',
        component: getRole,
    }
]
    

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});
export default router;