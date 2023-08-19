import { getCategoryAPI } from '@/api/layout.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表数据管理
  // state 导航数据列表
  const categoryList = ref([])
  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }
  return {
    categoryList,
    getCategory
  }
})
