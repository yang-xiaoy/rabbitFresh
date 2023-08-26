import httpInstance from '@/utils/http.js'

// 获取banner数据
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
  })
}

// 获取新鲜好物数据
export function findNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

// 获取人气推荐数据
export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

// 获取所有商品模块
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
