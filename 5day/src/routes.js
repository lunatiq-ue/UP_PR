import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Hanzo from '@/pages/Hanzo'
import NotFound from '@/pages/404'
import Genji from '@/pages/Genji'

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'hanzo',
            component: Hanzo
        },
        {
            path: '/Genji',
            name: 'genji',
            component: Genji
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})

