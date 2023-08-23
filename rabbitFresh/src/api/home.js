import httpInstance from '@/utils/http.js'

// 获取banner数据
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}
