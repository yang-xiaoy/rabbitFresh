// 引入初始化样式文件
import '@/style/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 图片懒加载
// import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives/index.js'

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

// 定义全局指令（将全局指令写成插件，directives文件中）
// app.directive('img-lazy', {
//   mounted(el, binding) {
//     // el：指令绑定的那个元素
//     // binding：binding.value 指令等于号后面绑定表达式的值
//     // console.log(el, binding.value)
//     useIntersectionObserver(el, ([{ isIntersecting }]) => {
//       if (isIntersecting) {
//         // isIntersecting 是一个bool类型，为true时候证明图片进入可视区域
//         // 进入可视区就需要请求图片地址
//         el.src = binding.value
//       }
//     })
//   }
// })
