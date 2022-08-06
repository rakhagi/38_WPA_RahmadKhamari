import { createRouter, createWebHistory } from "vue-router";
import homeBanner from '../components/homeBanner.vue';
import ourWorks from '../components/ourWorks.vue';
import testiMonials from '../components/testiMonials.vue';
import aboutUs from '../components/aboutUs.vue'

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
        {
            path: '/testi',
            component: testiMonials,
        },
        {
            path: '/about-us',
            component: aboutUs,
        },

    ],
})

export default router