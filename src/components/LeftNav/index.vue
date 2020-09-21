<template>
      <!-- <el-col :span="4" class="leftNav"> -->
      <div class="leftNav">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%;"
        
        >
          <el-menu-item index="10">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-shopping-bag-2" ></i>
                <span>商品</span>
              </template>
              <el-menu-item-group>          
                <!-- <el-menu-item index="1-1"><i class="el-icon-shopping-bag-2"></i>选项1</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-shopping-bag-2"></i>选项2</el-menu-item> -->
                <el-menu-item index="1-1" @click="toListPage"><i class="el-icon-notebook-2"></i>商品列表</el-menu-item>
                <el-menu-item index="1-2" @click="toaddPage"><i class="el-icon-folder-add"></i>添加商品</el-menu-item>
                <el-menu-item index="1-3"><i class="el-icon-menu"></i>商品分类</el-menu-item>
                <el-menu-item index="1-4"><i class="el-icon-s-operation"></i>商品类型</el-menu-item>
                <el-menu-item index="1-5"><i class="el-icon-refrigerator"></i>品牌管理</el-menu-item>
              </el-menu-item-group>        
          </el-submenu>

          <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单</span>
              </template>                  
          </el-submenu>
         <el-menu-item index="4">
            <i class="el-icon-collection-tag"></i>
            <span slot="title">营销</span>
          </el-menu-item> 
          

          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item> -->
        </el-menu>
        </div>
      <!-- </el-col> -->
 
    

</template>
    
<script>
export default {
  name: "Test",
  methods: {

      toListPage(){
        this.$router.push({
          path:"/goodslist"
        })
      },
      toaddPage(){
        this.$router.push({
          name:'goodsaddname'
        })
      },
      
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
    
<style  scoped>
    .leftNav{
      height: 100%;
    }
</style>