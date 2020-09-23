import Ajax from '@/ajax/Ajax'

//请求测试
export const reqTest = () =>Ajax.get('/testJson')

//请求商品列表
export const reqGoodsList = () =>Ajax.get('/goodsList')

//请求用户列表
export const reqUserList = () =>Ajax.get('/userlist')

//修改用户的启用状态
export const reqChangeUserStatus = ({id,status})=> Ajax({
    url:`/userlist/${id}`,
    method:"PATCH",
    
    data:{     
         status:status
    }
})

//修改用户的信息
export const reqUpdateUser = (newUser) =>Ajax({
    url:`/userlist/${newUser.id}`,
    method:'PATCH',
    data:{
        ...newUser
    }
})

//查詢权限列表
export const reqRoleList = () =>Ajax.get('/rolelist')

//查詢权限树信息
export const reqRoleTree = () =>Ajax.get('/treelist')

//查詢某个角色得信息
// export const reqOneRoleInfo = () =>Ajax.get('/treelist') //暂时没用

//修改某个用户的权限信息,参数是一个新权限的数字的集合
export const reqChangeRoleTree = (id,roleChildren) => Ajax({
    url:`/rolelist/${id}`,
    method:"PATCH",
    data:{
        roleChildren:roleChildren
    }
})

//用户登录
export const reqLogin= (userInfo) =>Ajax({
    method:"GET",
    url:"/userlist",
    params:userInfo
})
