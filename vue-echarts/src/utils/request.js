import axios from 'axios'
import service from './service'

// 创建实例
const requestD = axios.create({
        baseURL: service.url,
        // baseURL:'http://192.168.18.101:10000',
        timeout: 5000
    })
    // 添加请求拦截器
requestD.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        return config;
    }, err => {
        // 对请求错误做些什么
        return Promise.reject(err);
    })
    // 添加相应拦截器
requestD.interceptors.response.use(res => {
    // 对相应数据做些什么
    return res.data;
}, err => {
    return Promise.reject(err)
})
export default requestD