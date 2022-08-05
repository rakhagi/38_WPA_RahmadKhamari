import { createRouter, createWebHistory } from "vue-router";
import homeBanner from '../components/homeBanner.vue';
import ourWorks from '../components/ourWorks.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homeBanner,
        },
        {
            path:'/ourworks',
            component: ourWorks,
        },

    ],
})

export default router