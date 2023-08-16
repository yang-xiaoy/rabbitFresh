import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 拦截器

// 请求拦截
httpInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)

httpInstance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (e) => {
    return Promise.reject(e)
  }
)

export default httpInstance
