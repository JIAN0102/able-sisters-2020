import Vue from 'vue';
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// cookies
import VueCookies from 'vue-cookies';
// jquery
import jquery from 'jquery';
// bootstrap
import 'bootstrap';
// vue-loading-overlay
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
// vee-validate
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules'; // 驗證規則
import zhTW from 'vee-validate/dist/locale/zh_TW.json'; // 語系
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
// loading
import newLoading from './components/Loading.vue';

import App from './App.vue';
import router from './router';

import currencyFilter from './filters/currency';

window.$ = jquery;

Vue.use(VueAxios, axios);

Vue.use(VueCookies);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

Vue.filter('currency', currencyFilter);

Vue.component('Loading', newLoading);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.mixin({
  methods: {
    setAxiosAuthorization() {
      const token = this.$cookies.get('token');
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
  },
});

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
