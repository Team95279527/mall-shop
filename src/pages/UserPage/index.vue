<template>
  <div class="user-container">
    <el-card class="w">
      <div class="search-button">
        <el-button size="mini">重置</el-button>
        <el-button type="primary" size="mini">查询搜索</el-button>
      </div>
      <div>
        输入搜索:
        <el-input label="dwadawdawd"></el-input>
      </div>
    </el-card>
    <el-card class="w">
      数据列表
      <button>添加</button>
    </el-card>

    <el-table
      ref="singleTable"
      :data="userList"
      highlight-current-row
      style="width:93%"
      class="w user-table"
      border 
      
    >
      <el-table-column type="index" width="50"></el-table-column>
      <!-- <el-table-column property="date" label="日期" width="120"></el-table-column> -->
      <el-table-column prop="username" label="账号" align="center" width="120"></el-table-column>
      <el-table-column prop="nickName" label="姓名" align="center" width="120"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center" width="130"></el-table-column>
      <el-table-column prop="createTime" label="添加时间" ></el-table-column>
      <el-table-column prop="loginTime" label="最后登录" ></el-table-column>
      <el-table-column  label="是否启用" width="120">
        <template slot-scope="{row,$index}">
          <el-switch :value="row.status===1?true:false" @change="changeStatus(row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column  label="操作" >
          <template slot-scope="{row,$index}">
            <el-button type="text" size="mini" class="btn" @click="showRoleDialog(row)">分配角色</el-button>
            <el-button type="text" size="mini" @click="showEdit(row)">编辑</el-button>
            <el-button type="text" size="mini">删除</el-button>   
          </template>
      </el-table-column>     
    </el-table>
    <el-dialog
      title="编辑用户"
      :visible.sync="isEditDialogShow"
      width="40%"
      :center="true"
      :before-close="handleClose"
      >
      <!-- <span>需要注意的是内容是默认不居中的</span> -->
      <el-form ref="form" :model="choosedUser" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="choosedUser.username" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="choosedUser.nickName" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="choosedUser.email" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="choosedUser.password" size="mini" type="password"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" :rows="3" v-model="choosedUser.note" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="是否启用">
            <el-radio v-model="choosedUser.status" :label="1" >是</el-radio>
            <el-radio v-model="choosedUser.status" :label="0" >否</el-radio>
        </el-form-item>
        
        
          
      </el-form>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="isEditDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="isEditDialogShow = false">确 定</el-button> -->
        <el-button @click="cancelUpdate">取 消</el-button>
        <el-button type="primary" @click="confirmUpdate">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="分配角色"
      :visible.sync="isRoleDialogShow"
      width="20%"
      center>
      <span slot="footer" class="dialog-footer">
        <el-select placeholder="请选择" v-model="choosedUser.roleId">
          <el-option
            v-for="role in roleList"
            :key="role.name"
            :label="role.name"
            :value="role.id">
          </el-option>
        </el-select>
        <el-button @click="cancelRole">取 消</el-button>
        <el-button type="primary" @click="changeRole">确 定</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>
        
<script>
import { log } from 'util';
import { mapState } from 'vuex';
export default {
  name: "UserPage",
  data() {
    return {
            isEditDialogShow:false ,//编辑dialog页面，默认关闭
            isRoleDialogShow:false,//分配角色的diaolog,默认关闭
            choosedUser:{}, //要修改的用户的信息
            originRoleId:null,//用户原来的权限,如果不修改的话,即使点击确认也不必发请求
          };
  },
  mounted(){
    this.getUserList()
    this.getRoleList()
  },
  methods:{
    //请求用户列表
    getUserList(){
      this.$store.dispatch('getUserList')
    },
    //打开角色分配的dialog
    showRoleDialog(row){
      // console.log(row.Id);
      this.choosedUser ={...row}
      this.originRoleId = row.roleId
      this.isRoleDialogShow = true
    },
    //获取权限列表
    getRoleList(){
      this.$store.dispatch('getRoleList')
    },
    //修改用户权限
    changeRole(){
      console.log(this.originRoleId,this.choosedUser.roleId)
      if(this.choosedUser.roleId === this.originRoleId) return
      this.$store.dispatch('updateUser',this.choosedUser)
      this.getUserList()
      this.isRoleDialogShow = false
    },
    //取消修改用户权限
    cancelRole(){
      this.isRoleDialogShow = false
    },
    //打开用户编辑dailog
    showEdit(row){    
      // console.log(row);
      this.choosedUser = {...row}
      // this.choosedUser = row
      this.isEditDialogShow = true
    },
    //修改启动状态
    changeStatus(row){
      // console.log(row);
      // row.status = !row.status
      let originStatus = row.status
      console.log('row.status',originStatus);
      let status
      if (originStatus === 1) {
            status = 0
        } else if (originStatus === 0) {
            status = 1
        }
      this.$store.dispatch('changeUserStatus',{id:row.id,status})
      // this.getUserList()
    },
    // 修改dailog上的取消按钮点击之前要执行的操作
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(result=> {
            done();
          })
          .catch(result => {});
    },
    //取消修改用户信息
    cancelUpdate(){
      this.isEditDialogShow = false
    },
    //确认修改用户信息
    confirmUpdate(){
      this.isEditDialogShow = false
      this.$store.dispatch('updateUser',this.choosedUser)
      //这里可以优化,看下是否不必再发一次查询请求
      this.getUserList()
    }

  },
  computed:{
    ...mapState({
      userList:state=>state.user.userList,
      roleList:state=>state.role.roleList
    }),
  
  }
};
</script>
        
<style lang="less" scoped>
    .user-table{
        padding: 0;
        // text-align: center;
        // align: center;
        .btn{
          font-size: 12px;
        }
    }
</style>