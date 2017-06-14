// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import lodash from 'lodash';
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

global.jQuery = jQuery;
global.$ = jQuery;
global.lodash = lodash;
global._ = lodash;
let Bootstrap = require('bootstrap');

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
