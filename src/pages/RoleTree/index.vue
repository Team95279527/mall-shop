<template>
  <el-card class="roletree-container w">
    <!-- <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    ></el-tree> -->
    <!-- :default-expanded-keys="[2, 3]" 默认打开第二第三部分(这里说得是id) -->
    <el-tree
      :data="roleTreeList"
      show-checkbox
      node-key="id"   
      :default-checked-keys="selectedTreeNodeList"  
      :props="treeProps"   
      :default-expand-all="true"
      ref="roleTreeRef"
    ></el-tree>
    <!-- :default-checked-keys="[5]"   -->
    <el-button type="text">取消</el-button>
    <el-button type="text" @click="toSaveChoosedRole">保存</el-button>
  </el-card>
</template>
        
<script>
export default {
  name: "RoleTree",
  data() {
    return {
      treeProps:{
          children:"children",
          label:"title"
      },
      roleTreeList:[],//权限树的数据
      selectedTreeNodeList:[],//   权限树的选中的节点的集合
      rootRoleIds:[] //权限树的根节点的id,这些不能添加在roleChildren中,需要过滤下
    };
  },
  mounted(){
      
      this.getRoleTreeList(),
      //   this.getOneRoleInfo()
      console.log(this.$route);
      this.selectedTreeNodeList = this.$route.query.choosedRole.roleChildren 
    
  },
  methods:{
      //查詢角色树列表
     async  getRoleTreeList(){
            const result= await this.$API.reqRoleTree()
            //   console.log('roletree',result);
            this.roleTreeList = result
            this.roleTreeList.forEach(item=>{
                this.rootRoleIds.push(item.id)
            })
            // let arr = ['q', 'w', 'e', 'r', 't', 'y'];
            // let aaa = ['q', 'y'];
            // arr = arr.filter(item => !aaa.some(aaaItem => aaaItem === item));
            // console.log(arr)  //["w", "e", "r", "t"]
          
      },
      //查詢某一种角色的信息
    //   getOneRoleInfo(){
    //       console.log(this.$route)
    //   }
    //保存修改后的权限列表
    async toSaveChoosedRole(){
        let tempSelectedArr = []
        this.selectedTreeNodeList = this.$refs.roleTreeRef.getCheckedKeys()
        let {selectedTreeNodeList,rootRoleIds} = this
        const result = selectedTreeNodeList.filter(item=>!rootRoleIds.some(rootItem=>rootItem===item)) //过滤根节点
        // console.log('选中的',this.$refs.roleTreeRef.getCheckedKeys())
        console.log('选中的',result)
        const res = await this.$API.reqChangeRoleTree(this.$route.params.id,result)
    },
  }
};
</script>
        
<style lang="less" scoped>
.roletree-container {
  margin: 20px 200px;
}
</style>