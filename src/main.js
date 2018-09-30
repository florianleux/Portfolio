import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal';


Vue.config.productionTip = false
Vue.use(VueScrollReveal,
    {
      // reset:false
    });

new Vue({
  router,
  VueScrollReveal,
  render: h => h(App)
}).$mount('#app')
