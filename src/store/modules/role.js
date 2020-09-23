import {reqRoleList} from '@/api'

const state = {
    roleList:[]
}

const mutations = {
    CHANGEROLELIST(state,arg){
        state.roleList = arg
    }
}

const actions = {
   async  getRoleList({commit}){
        const result = await reqRoleList()
        // console.log(result)
        commit('CHANGEROLELIST',result)
    }
   
}

const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}