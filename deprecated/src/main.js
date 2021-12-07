import Vue from 'vue'
import App from './App.vue'
import router from "@/config/router"
import store from "@/config/store"
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
import ElementsUI from 'element-ui'
import {Loading} from 'element-ui'
import {Notification} from 'element-ui'
import {MessageBox} from 'element-ui'

import VueScrollTo from 'vue-scrollto'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import VueMask from 'v-mask'

import BaseSvg from "@/components/BaseSvg";

if (process.env.NODE_ENV === 'development') { // отключаем индексирование для env dev
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'robots')
  meta.setAttribute('content', 'noindex')
  document.head.appendChild(meta)
}

Vue.component('base-svg', BaseSvg)

Vue.use(VueMask);

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.use(PerfectScrollbar)
Vue.use(VueScrollTo)

Vue.use(ElementsUI, Loading, Notification, MessageBox)

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.interceptors.request.use( function (config) {
  return config;
});
axios.interceptors.response.use(undefined, (error) => {
  return Promise.reject(error)
})
Vue.prototype.$http = axios

import {config} from "@/config/config";
Vue.prototype.$config = config


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
