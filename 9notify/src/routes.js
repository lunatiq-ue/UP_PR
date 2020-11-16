import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Shop from '@/pages/Shop'
import NotFound from '@/pages/404'
import Users from '@/pages/Users'
import Product from '@/pages/Product'
import Notify from '@/pages/Notify'


export default new Router ({
    routes: [
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/Users',
            name: 'users',
            component: Users
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/notify',
            name: 'notify',
            component: Notify
        },
    ]
})

