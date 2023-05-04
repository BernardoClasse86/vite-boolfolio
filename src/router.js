import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Pages/Home.vue'
import Portfolio from './components/Pages/Portfolio.vue'
import About from './components/Pages/About.vue'
import PortfolioShow from './components/Pages/Portfolio.show.vue'

const history = createWebHistory()

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },    
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path:'/portfolio/:slug',
            name: 'portfolio.show',
            component: PortfolioShow
        },
    ]
})

export { router }
