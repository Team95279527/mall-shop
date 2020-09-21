//注入组件
import GoodsAdd from '@/pages/GoodsAdd'
import GoodsList from '@/pages/GoodsList'
export default[
    {
      path:"/goodslist",
      component:GoodsList,
    },
    {
      path:"/goodsadd",
      component:GoodsAdd,
      name:'goodsaddname'
    },
    {
      path:'/',
      redirect:'/goodslist'
    }
]

