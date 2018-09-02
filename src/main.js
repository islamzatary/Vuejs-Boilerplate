// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import { router } from './router'
import VeeValidate from 'vee-validate';
import { store } from './store'
import { i18n } from '@/i18n'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VeeValidate, {errorBagName: "errors",locale: 'en'})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
}).$mount('#app')
