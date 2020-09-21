import {reqGoodsList} from '@/api'

const state = {
    goodsList:[]
}

const mutations ={
    GETGOODSLIST(state,arg){
        state.goodsList = arg
    }
}

const actions = {
    async getGoodsList({commit}){
      const result = await reqGoodsList('/list')
    //   console.log(result);
      if(result.code ===200){
        commit('GETGOODSLIST',result.data.list)
      }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}