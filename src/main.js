import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload';
import VueHtmlToPaper from 'vue-html-to-paper';


const options = {
  styles: [
    './print-css/print.css'
  ]
};

Vue.config.productionTip = false

Vue.use(VueLazyLoad);
Vue.use(VueHtmlToPaper,options);



new Vue({
  router,
    VueLazyLoad,
  render: h => h(App),
    VueHtmlToPaper
}).$mount('#app')
