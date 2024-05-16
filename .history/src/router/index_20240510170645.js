import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
    ]
});

export default router;