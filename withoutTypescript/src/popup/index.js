import Vue from 'vue'
import root from './root.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vuetify/dist/vuetify.min.css'
import router from './routes'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  render: h => h(root)
})
