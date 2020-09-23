import { reqGoodsList } from '@/api'

const state = {
    goodsList: []
}
const mutations = {
    GETGOODSLIST(state, arg) {
        state.goodsList = arg
    }
}


const actions = {
    async getGoodsList({ commit }) {

        const result = await reqGoodsList()
        //在本地json-server mock的逻辑
        commit('GETGOODSLIST', result)
        //在服务器mock的逻辑
        // console.log(result);
        // if(result.code ===200){
        // commit('GETGOODSLIST',result)
        // }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}