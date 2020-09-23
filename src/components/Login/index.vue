<template>
  <div class="login-container">
    <div class="login-div">
      <el-form ref="form" :model="userInfo" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userInfo.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" plain>取消</el-button>
      <el-button type="primary" plain @click="toLogin">登录</el-button>
    </div>
  </div>
</template>
        
<script>
import { mapMutations } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    async toLogin() {
      const result = await this.$API.reqLogin(this.userInfo);
      console.log(result);
      if (result.length > 0) {
        this.SAVEUSERINFO(result[0])
        this.$bus.$emit("changeLoginShow",false)
      }
    },
    ...mapMutations(['SAVEUSERINFO'])
  },
  
};
</script>
        
<style lang="less" scoped>
.login-div {
  width: 400px;
  height: 200px;
  background-color: aqua;
  margin-left: 50%;
  margin-top: 200px;
  transform: translateX(-50%);
  padding: 30px 40px;
}
</style>