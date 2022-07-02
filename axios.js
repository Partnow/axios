import axios from "axios";
//创建实例
const instance = axios.create({
    baseURL: "http://127.0.0.1",
    timeout: 6000
})

//拦截器
instance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

//
// 操作实例
export async function doPost(url, data, config) {
    try {
        return await instance.post(url, data, config)
    } catch (e) {
        console.log(url, e)
    }
}

export async function doDelete(url, data, config) {
    try {
        return await instance.delete(url, config)
    } catch (e) {
        console.log(url, e)
    }
}

export async function doPut(url, data, config) {
    try {
        return await instance.put(url, data, config)
    } catch (e) {
        console.log(url, e)
    }
}

export async function doGet(url, config) {
    try {
        return await instance.get(url, config)
    } catch (e) {
        console.log(url, e)
    }
}