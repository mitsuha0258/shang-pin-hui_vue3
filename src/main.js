import { createApp } from 'vue'
import App from './App.vue'

//引入路由相关文件
import router from "@/router";

//引入仓库进行注册
import store from "@/store"

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

//引入MockServer.js----mock数据
import '@/mock/mockServe'

//引入swiper样式
import 'swiper/css/swiper.css'

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from '@/api';

import lazyPlugin from 'vue3-lazy';


const app = createApp(App);
//需要把router进行注册
//可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
//$route(路由)：可以获取到路由信息（path、query、params）
//$router:进行编程式导航路由跳转push||replace
app.use(router);
//在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
app.use(store);
app.use(lazyPlugin,{
    //懒加载默认的图片
    loading: require('@/assets/1.gif')
});
//注册全局组件：第一个参数 组件名字  第二个参数：那个组件
app.component(TypeNav.name, TypeNav);
app.component(Carousel.name, Carousel);
app.component(Pagination.name, Pagination);
// 注册全局属性
app.config.globalProperties.$API=API;
app.mount('#app')
