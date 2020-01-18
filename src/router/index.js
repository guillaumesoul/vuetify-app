import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home';
import userRoutes from './user';
import tacheRoutes from './tache';
import usertacheRoutes from './usertache';
import securityRoutes from './security';
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        userRoutes,
        tacheRoutes,
        usertacheRoutes,
        securityRoutes,
    ]
});

router.beforeEach((to, from, next) => {
    if (!store.getters.isAuthenticated && to.name != 'login') {
        next('/login')
    } else {
        next()
    }
});

export default router;