import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from './views/Portfolio.vue'
import Category from './views/Category.vue'
import Coloring from './views/Coloring.vue'
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
        },
        {
            path: '/coloring',
            name: 'coloring',
            component: Coloring
        },
        {
            path: '/portfolio/:category',
            name: 'category',
            component: Category,
        }

    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
