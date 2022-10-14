const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  // 打包时不生成map文件
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  // lintOnSave: false,
  // 按需引入element-plus配置
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        // 尚硅谷可能会更换，及时看B站更新接口
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
})
