// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import '../my-theme/index.less'
import 'iview/dist/styles/iview.css'    // 使用 CSS
// import http from 'vue-resource'

Vue.use(iView)
Vue.config.productionTip = false

// Vue.use(http)
// Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
