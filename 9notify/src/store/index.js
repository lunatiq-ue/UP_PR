import Vue from 'vue'
import Vuex from 'vuex'
import notify from './notify'

Vue.use(Vuex)

import shop from './shop'
import example from './example'

export default new Vuex.Store({
    modules: {
        example,
        shop,
        notify
    }
})