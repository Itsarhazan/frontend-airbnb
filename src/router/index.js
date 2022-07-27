import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import aboutPage from '../views/about-page.vue'
import login from '../views/login.vue'
import dashboardPage from '../views/dashboard-page.vue'
import explorePage from '../views/explore-page.vue'
import stayDetails from '../views/stay-details.vue'
import orderDetails from '../views/order-details.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/about',
            name: 'about',
            component: aboutPage
        },
        {
            path: '/explore',
            name: 'explore',
            component: explorePage
        },
        {
            path: '/order/:id',
            name: 'order',
            component: orderDetails
        },
        {
            path: '/stay/:id',
            name: 'stay-details',
            component: stayDetails,
        },
        {
            path: '/dashboard',
            name: 'dashboardPage',
            component: dashboardPage,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },

    ]
})

export default router