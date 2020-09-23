import Vue from 'vue'
import Vuex from 'vuex'

import goods from './modules/goods'
import user from './modules/user'
import role from './modules/role'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        goods,
        user,
        role
    }
})