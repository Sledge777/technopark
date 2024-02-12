import { createRouter, createWebHistory } from "vue-router";
import main from '@/src/../pages/main'
import login from '@/src/../pages/login'
import reg from '@/src/../pages/reg'

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
]
    

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});
export default router;