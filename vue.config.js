const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_BASE_URL === "https://winone44.github.io/advice-generator-app-vue2/" ? "/advice-generator-app-vue2/" : "/",
})
