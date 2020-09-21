import axios from 'axios'

const Ajax = axios.create({
    baseURL: '/api',
    timeout: 20000
})

//请求拦截器
Ajax.interceptors.request.use(config => {
    // 请求之前的操作，可以写携带token，携带临时用户id等信息
    return config
})

//响应拦截器
Ajax.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        alert("请求出错，" + error.message || "未知错误")
    })



export default Ajax