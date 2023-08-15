# 1. 项目初始化

---

> 首先：检测node的环境，要大于 16。
> 命令：node -v

## 1. 创建项目

```sh
npm init vue@latest
```

- 根据提示，输入项目名称，选择所需的配置选项。

## 2. 进入项目

```sh
cd rabbitFresh
```

## 3. 初始化项目依赖


```sh
npm install
```

## 4. 运行项目

```sh
npm run dev
```

## 5. 项目打包命令

```sh
npm run build
```

# 2. 配置文件

---

## 1. package.json

- 项目包文件，项目的核心依赖文件

## 2. vite.config.js

- 项目配置文件，基于vite的配置文件

## 3. main.js入口文件

- 使用 createApp 函数创建应用实例。

```js
import './assets/main.css'
// createApp 创建实例
import { createApp } from 'vue'
import App from './App.vue'
// createApp(App)将根组件传入到实例中，mount('#app')挂载组件，#app在index.html文件中
createApp(App).mount('#app')
```

##  4. App.vue根组件

- 变化1： script，template，style进行了顺序调整（模板和样式挨着便于书写）。
- 变化2： 模板template不再要求唯一的根组件（节省元素，减少结构层级）。
- 变化3： 脚本script添加setup标识支持组合式API。



# 3. element plus插件

---

## 1. 安装

```sh
npm install element-plus --save

// 按需导入，自动安装
npm install -D unplugin-vue-components unplugin-auto-import
```

## 2. 配置

```js
// vite.config.js

// 导出插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 按需导入，自动安装
plugins: [
    vue(),
    // 配置按需导入的 element-plus 插件
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
 ],
```



