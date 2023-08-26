import httpInstance from '@/utils/http.js'

// 获取分类数据
export function getTopCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}
