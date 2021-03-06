import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

// Vue Resources
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.root = 'https://socialshare-1f099-default-rtdb.firebaseio.com/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
