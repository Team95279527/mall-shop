<template>
  <div class="table-row w">
    <el-table :data="roleList" border style="width: 100%">
      <el-table-column type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="description" label="描述" width="180"></el-table-column>
      <el-table-column prop="adminCount" label="用户数"></el-table-column>
      <el-table-column  label="是否启用">
          <template slot-scope="{row,$index}">
               <!-- v-model="value" -->
               <el-switch :value="row.status===1">
               </el-switch>
          </template>
      </el-table-column>
      <el-table-column  label="操作" width="150 ">
          <template slot-scope="{row,$index}">
            <el-button type="text" size="mini" @click="toRoleTreePage(row)">分配菜单</el-button>
            <el-button type="text">分配菜单</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
      </el-table-column>

    </el-table>
  </div>
</template>
        
<script>
import { mapState } from 'vuex';
export default {
  name: "RolePage",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  mounted(){
      this.getRoleList()
  },
  methods:{
      //查詢基本权限列表
      getRoleList(){
          this.$store.dispatch('getRoleList')
      },
      //跳转至roletree页面
      toRoleTreePage(row){
        //   this.$router.push({
          this.$router.replace({
            name:'roletree',
            params:{id:row.id},
            query:{
                choosedRole:{...row}
            }
          })
      },
  },
  computed:{
      ...mapState({
          roleList:state=>state.role.roleList
      })
  }
};
</script>
        
<style lang="less" scoped>
</style>