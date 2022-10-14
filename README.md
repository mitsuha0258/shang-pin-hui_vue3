# shang-pin-hui_vue3

[尚品会B站课程链接](https://www.bilibili.com/video/BV1Vf4y1T7bw?p=1)

本项目主要涉及技术vue, vuex, vue-router, axios等。

本项目使用Vue3完成，相比于原项目使用Vue2完成，做出主要改动如下：
- 更改main.js，router文件，使用vue3写法
- 使用mitt插件代替vue3已废弃的全局事件总线\$bus
- 使用新版的vee-validate校验写法
- 使用element-plus代替element-ui
- 使用throttle-debounce代替lodash
- 使用vue3-lazy代替vue-lazyload

本项目默认打开ESLINT校验工具，如果需关掉请在vue.config.js修改

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
