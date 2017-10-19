import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/js/jquery-3.2.1.min.js'
import 'propellerkit/dist/css/bootstrap.min.css'
import 'propellerkit/dist/css/propeller.min.css'
import 'propellerkit/dist/js/bootstrap.min.js'
import 'propellerkit/dist/js/propeller.min.js'
import '../src/assets/css/style.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
