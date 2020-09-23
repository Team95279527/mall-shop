//注入组件
import GoodsAdd from '@/pages/GoodsAdd'
import GoodsList from '@/pages/GoodsList'
import MenuPage from '@/pages/MenuPage'
import ResourcePage from '@/pages/ResourcePage'
import RolePage from '@/pages/RolePage'
import UserPage from '@/pages/UserPage'
import RoleTree from '@/pages/RoleTree'


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
      path:"/userpage",
      component:UserPage,
    },
    {
      path:"/rolepage",
      component:RolePage,
    },
    {
      path:"/roletree",
      component:RoleTree,
      name:"roletree"
    },
    {
      path:"/resourcepage",
      component:ResourcePage,
    },
    {
      path:"/menupage",
      component:MenuPage,
    },
   
    // {
    //   path:'/',
    //   redirect:'/'
    // }
]

