import axios from 'axios'
import storageService from '@/service/storageService'

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 1000,
})

// 添加拦截器用于更新token
/* request.interceptors.request.use(
    config => {
        // 在发送请求之前做什么
        Object.assign(config.headers, { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` })
        return config;
    },
    error => {
        return Promise.reject(error);
    }
) */
export default request