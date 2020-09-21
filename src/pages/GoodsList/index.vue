<template>
  <div class="content-container">
    <el-card class="el-card-outer">
      <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline"> -->
      <!-- <el-input v-model="formInline.user" placeholder="审批人"></el-input> -->
      <!-- <el-select v-model="formInline.region" placeholder="活动区域"> -->
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="输入搜索:" class="el-item">
          <el-input size="small" placeholder="商品名称" v-model="keyword"></el-input>
        </el-form-item>
        <el-form-item label="商品货号:" class="el-item">
          <el-input size="small" placeholder="商品货号" v-model="productSn"></el-input>
        </el-form-item>

        <el-form-item label="商品分类:" class="el-item">
          <el-select
            placeholder="请选择"
            value
            size="small"
            class="el-select-item"
            v-model="productCategoryId"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品品牌:" class="el-item">
          <el-select
            placeholder="请选择品牌"
            value
            size="small"
            class="el-select-item"
            v-model="brandId"
          >
            <el-option label="小米" value="12"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上架状态:" class="el-item">
          <el-select
            placeholder="全部"
            value
            size="small"
            class="el-select-item"
            v-model="publishStatus"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态:" class="el-item">
          <el-select
            placeholder="全部"
            value
            size="small"
            class="el-select-item"
            v-model="verifyStatus"
          >
            <el-option label="已审核" value="1"></el-option>
            <el-option label="未审核" value="0"></el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item>
          <el-button type="primary" >查询</el-button>
        </el-form-item>-->
      </el-form>
      <div class="left-search-title">
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
      </div>
      <div class="right-button-div">
        <el-button class="reset-button" size="small">重置</el-button>
        <el-button type="primary" size="mini" class="query-button">查询结果</el-button>
      </div>
    </el-card>
    <el-card class="el-card-outer mid-outer">
      <div class="left-list-title">
        <i class="el-icon-tickets"></i>
        <span>数据列表</span>
      </div>
      <el-button class="right-add" size="small">添加</el-button>
    </el-card>
    <el-table
      ref="multipleTable"
      :data="goodsList"
      tooltip-effect="dark"
      border
      class="el-card-outer footer-table"
      style="width:96%"
    >
      <el-table-column type="selection" width="55" ></el-table-column>
      <el-table-column  type="index" label="编号" width="70"></el-table-column>
      <el-table-column prop="name" label="商品图片" width="110" >
        <template slot-scope="{row,$index}">
          <img :src="row.pic" style="width:80px"/>
          <!-- <img
            src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg"
            style="width:80px"
          /> -->
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="120" >
        <template slot-scope="{row,$index}">
          <div>{{row.name}}</div>
          <div>品牌:{{row.brandName}}</div>
        </template>
        <!-- <div>华为p20</div>
        <div>品牌：华为</div> -->
      </el-table-column>
      <el-table-column label="价格/货号" width="110">
        <template slot-scope="{row,$index}">
          <div>{{row.price}}</div>
          <div>品牌:{{row.productSn}}</div>
        </template>
        <!-- <div>价格：￥3788</div>
        <div>货号：1234567</div> -->
      </el-table-column>
      <el-table-column label="标签" width="120">
        <div>
          上架 :  <el-switch v-model="value" ></el-switch>
        </div>
        <div>
          新品 :  <el-switch v-model="value" ></el-switch>
        </div>
        <div>
          推荐 :  <el-switch v-model="value" ></el-switch>
        </div>
        
      </el-table-column>
      <el-table-column label="排序" width="70" prop="sort"></el-table-column>
      <el-table-column label="sku库存" width="80"><el-button type="primary" icon="el-icon-edit" circle></el-button></el-table-column>
      <el-table-column label="销量" width="80">0</el-table-column>
      <!-- <el-table-column label="审核状态" width="100">未审核</el-table-column> -->
      <el-table-column label="审核状态" width="100">
        <template slot-scope="{row,$indx}">
          <span v-if="row.publishStatus===1">未审核</span>
          <span v-else>已审核</span>
        </template>

      </el-table-column>

      <el-table-column label="操作" width="150" style="display:flex">
        <template slot-scope="{row,$index}">
          <el-button size="mini">查詢</el-button>
          <el-button size="mini">查詢</el-button>
          <el-button size="mini">查詢</el-button>
          <el-button size="mini">查詢</el-button>
        </template>
      </el-table-column>

      <!-- <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="70">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>-->
    </el-table>

    <!-- <el-pagination 
       class="foot-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>-->
    <el-select placeholder="请选择操作" size="small" class="el-select-item" v-model="choose">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </div>
</template>
    
<script>

// import { log } from 'util';
import {mapState} from 'vuex'
export default {
  name: "",
  data() {
    return {
      // keyword: 1
      // pageNum: 1
      // pageSize: 5
      // publishStatus: 1
      // verifyStatus: 1
      // productSn: 2
      // productCategoryId: 7
      // brandId: 6
      keyword: "",
      pageNum: 1,
      pageSize: 5,
      publishStatus: "",
      verifyStatus: "",
      productSn: "",
      productCategoryId: "",
      brandId: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
     
     choose: "",
      value: true,
    };
  },
  mounted(){
    this.getGoodsList()
  },
  computed:{
    ...mapState({
      goodsList:state=>state.goods.goodsList
    })
  },
  methods:{
     getGoodsList(){
       this.$store.dispatch('getGoodsList')     
      // const result = await this.$store.dispatch('getGoodsList')     
      // if(result.code===200){
      //   console.log('首页',result.data);
      // }
    }
  }
};
</script>
    
<style lang="less" scoped>
.content-container {
  // height: 80%;
  // overflow: scroll-y;
  .el-card-outer {
    margin: 20px 40px 0 40px;
    font-size: 18px;
    padding: 30px 0 20px;
    position: relative;
    .demo-form-inline {
      .el-item {
        margin: 0 40px;
        .el-select-item {
          width: 188px;
        }
      }
    }
    .left-search-title {
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .right-button-div {
      position: absolute;
      right: 40px;
      top: 10px;
      .reset-button {
        // border: 1px solid #eee;
        // padding: 7px 12px;
        // color: #5f5f5f;
      }
    }
    &.mid-outer {
      padding: 10px 10px;
      position: relative;
      .right-add {
        position: absolute;
        right: 30px;
        top: 25px;
      }
    }
    &.footer-table {
      padding-top: 0;
      // color: aqua;
      font-size: 12px;
      
    }
  }
  .foot-pagination {
    margin: 20px 0 20px 700px;
  }
}
</style>