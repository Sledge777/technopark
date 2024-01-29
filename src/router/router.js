import { createRouter, createWebHistory } from "vue-router";
import main from '@/src/../pages/main'
import webdev from '@/src/../pages/webdev'

const routes = [
    {
       path: '/',
        component: main, 
    },
    {
        path:'/webdev',
        component: webdev,
    }
]
    

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});
export default router;