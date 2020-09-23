import { reqUserList, reqChangeUserStatus,reqUpdateUser } from '@/api'

const state = {
    userList: [],
    userInfo:{},
}

const mutations = {
    GETUSERLIST(state, arg) {
        state.userList = arg
    },
    CHANGEONEUSERSTATUS(state,{id, status}){
        const user = state.userList.find((user) => user.id === id);
        user.status = status;
    },
    UPDATEONEUSER(state,arg){
        // const user = state.userList.find(user=>user.id===arg.id)
        // user = arg
    },
    SAVEUSERINFO(state,arg){
        state.userInfo = arg
    }
}


const actions = {
    async getUserList({ commit }) {
        const result = await reqUserList()
        commit("GETUSERLIST", result)
    },
    async changeUserStatus({ commit }, { id, status }) {
        // console.log('传递到user',status)
        //修改服务器数据
        const result = await reqChangeUserStatus({ id, status })
        // 修改本地vuex数据
        commit("CHANGEONEUSERSTATUS", { id, status })
    },
    async updateUser({commit},newUser){
        const result = await reqUpdateUser(newUser)
        // console.log(result);
        // if(result.nickName){
        //     commit('UPDATEONEUSER',newUser)
        // }
    },
    //保存登录的用户信息
    
}

const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}