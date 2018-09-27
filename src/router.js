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
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Portfolio
        }
    ]
})
