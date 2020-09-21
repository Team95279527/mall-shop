<template>
  <el-row class="outer"> 
    <el-col :span="4" style="height:100%">
      <LeftNav />
    </el-col>
    
    <!-- <Main :span="20" />     -->
    <el-col :span="20" style="height:100%;background-color: #bfa;overflow: auto;">
      <Header></Header>
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>


import LeftNav from './components/LeftNav'
import Main from './components/Main'
import Header from './components/Header'


export default {
  name: 'App',
  components: { 
    LeftNav,
    Main,
  }
}
</script>

<style>
  .outer{
    /* height: 600px  !important;   */
    height: 100%;
    /* background-color: #bfa; */
  }
</style>
