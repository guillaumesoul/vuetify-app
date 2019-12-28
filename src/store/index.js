import Vue from 'vue';
import Vuex from 'vuex';
import makeCrudModule from './modules/crud';
import notifications from './modules/notifications';
import userService from '../services/user';
import tacheService from '../services/tache';
import usertacheService from '../services/usertache';
import security from './modules/security';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        notifications,
        security,
        user: makeCrudModule({
            service: userService
        }),
        tache: makeCrudModule({
            service: tacheService
        }),
        usertache: makeCrudModule({
            service: usertacheService
        }),

    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;