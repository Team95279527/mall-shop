<template>
  <el-row v-if="isLoginShow">
    <Login></Login>
  </el-row>
  <el-row v-else class="outer">
    <el-col :span="4" style="height:100%">
      <LeftNav :showMenuList="showMenuList"/>
    </el-col>

    <!-- <Main :span="20" />     -->
    <el-col :span="20" style="height:100%;background-color: #bfa;overflow: auto;">
      <Header></Header>
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import LeftNav from "./components/LeftNav";
import Main from "./components/Main";
import Header from "./components/Header";
import Login from "./components/Login";
import { mapState } from 'vuex';

export default {
  name: "App",
  data() {
    return {
      isLoginShow: true,
      roleList:null,
      // showMenuList:null,
    };
  },
  beforeMount(){

  },
  mounted() {
    this.$bus.$on("changeLoginShow",this.changeLoginShow)
    this.getRoleList()
  },
  methods: {
    async getRoleList(){
      this.roleList = await this.$API.reqRoleList()
    },
    //改变（关闭）登录窗口
    changeLoginShow(isLoginShow){
      this.isLoginShow = isLoginShow
    }
  },
  computed:{
    ...mapState({
      userInfo:state=>state.user.userInfo
    }),
    roleId(){
      return this.userInfo.roleId
    },
    showMenuList(){
      let {roleList,roleId} = this
      // this.roleList.find()
      const result=roleList.find(item=>item.id===roleId).roleChildren
      result.push(roleId)
      // console.log(result);
      return result
    }
  },
  components: {
    LeftNav,
    Main,
    Login,
  },
};
</script>

<style>
.outer {
  /* height: 600px  !important;   */
  height: 100%;
  /* background-color: #bfa; */
}
</style>
