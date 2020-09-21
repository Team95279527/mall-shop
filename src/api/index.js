import Ajax from '@/ajax/Ajax'

//请求测试
export const reqTest = () =>Ajax.get('/testJson')

//请求商品列表
export const reqGoodsList = () =>Ajax.get('/list')