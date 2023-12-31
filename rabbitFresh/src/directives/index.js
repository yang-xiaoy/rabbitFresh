// 定义懒加载插件
// 图片懒加载
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el：指令绑定的那个元素
        // binding：binding.value 指令等于号后面绑定表达式的值
        // console.log(el, binding.value)
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // isIntersecting 是一个bool类型，为true时候证明图片进入可视区域
            // 进入可视区就需要请求图片地址
            el.src = binding.value
            // console.log(isIntersecting)
            // 图片加载完成后停止监听，否则useIntersectionObserver函数是反复监听的isIntersecting是反复打印true和false
            // 反复监听会造成资源浪费
            stop()
          }
        })
      }
    })
  }
}
