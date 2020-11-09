import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Shop from '@/pages/Shop'
import NotFound from '@/pages/404'
import Genji from '@/pages/Genji'
import Product from '@/pages/Product'


export default new Router ({
    routes: [
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/Genji',
            name: 'genji',
            component: Genji
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
    ]
})

