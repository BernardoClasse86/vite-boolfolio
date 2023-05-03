import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Pages/Home.vue'
import Portfolio from './components/Pages/Portfolio.vue'
import About from './components/Pages/About.vue'

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
        },    {
            path: '/about',
            name: 'about',
            component: About,
        },
        
    ]
})

export { router }
