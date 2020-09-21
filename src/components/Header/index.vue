<template>
  <div class="header">
    <i class="el-icon-s-fold"></i>
    <el-breadcrumb separator="/" class="breadcrumb-wrapper">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
     
    </el-breadcrumb>
  </div>
</template>
    
<script>
export default {
  name: "",
};
</script>
    
<style  lang="less" scoped>
  .header{
    height: 50px;
    // background-color: #bfa;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    i{
      font-size: 18px;
      margin: 0 10px;
      
    }
    .breadcrumb-wrapper{      
      font-size: 16px;
    }
  }
</style>