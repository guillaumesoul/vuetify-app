import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import store from './store';
import router from './router';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

/*import axios from 'axios';

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}*/

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');