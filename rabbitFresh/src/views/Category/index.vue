<script setup>
import { getTopCategoryAPI } from '@/api/category.js'
import { getBannerAPI } from '@/api/home.js'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import GoodsItem from '@/views/Home/components/GoodsItem.vue'

// ref({})初始化根据后端返回的值类型进行，后端返回的是Object类型
const categoryData = ref({})
// 组件内获取路由参数
const route = useRoute()
// id默认参数是 id = route.params.id，在 onBeforeRouteUpdate 调用的时候传递参数，就是用传递的参数，否则使用默认参数
const getCategory = async (id = route.params.id) => {
  const res = await getTopCategoryAPI(id)
  categoryData.value = res.result
}

const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: '2'
  })
  bannerList.value = res.result
}

onMounted(() => {
  getCategory(),
    getBanner()
})

// 2. 解决路由缓存问题。目标：路由参数变数的时候，可以把分类数据接口重新发送
onBeforeRouteUpdate((to) => {
  // 存在问题：使用最新的路由参数请求最新分类数据
  // console.log(to)
  getCategory(to.params.id)
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 产品轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 产品分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink to="/">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }

  .home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 500px;
    }
  }
}
</style>