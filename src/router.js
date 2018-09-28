import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        }
    ]
})
