import axios from 'axios'


//封装axios请求
export function request(config){
    const httpRequest = axios.create({
        baseURL: "http://106.54.54.237:8000/api/mn",
        timeout: 5000
    })
    // 请求拦截
    httpRequest.interceptors.request.use( config => {
      return config
    }, err => {
      return err
    })
    // 响应拦截
    httpRequest.interceptors.response.use( res => {
      return res.data
    }, err => {
      return err
    })
    return httpRequest(config)
}
// http://106.54.54.237:8000/api/mn/home/data?type=pop&page=1
// http://123.207.32.32:8000/

