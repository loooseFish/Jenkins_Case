import Vue from 'vue' // 导入Vue的核心包
import Parent from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  // 错误处理逻辑
  if (err.isAxiosError) {
    //axios请求错误为手动捕获 不需要进行解析处理 
  } else {
    const errJson = JSON.stringify(err, Object.getOwnPropertyNames(err), 2)
    
    console.log(JSON.parse(errJson))
  }
};

// 初始化Vue实例
new Vue({
  render: h => h(Parent), // 执行App.vue组件
  router,
}).$mount('#app') // 挂载到index.html页面中的id="app"

