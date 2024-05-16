import Vue from 'vue' // 导入Vue的核心包
import Parent from './App.vue'
import router from './router'
// message解构
import { message } from './components';
Vue.use(message)
// Vue.use(message)

Vue.config.productionTip = false

// vue错误包装
Vue.config.errorHandler = function (err, vm, info) {
  // 错误处理逻辑
  if (err.isAxiosError) {
    //axios请求错误为手动捕获 不需要进行解析处理 
  } else {
    const errJson = JSON.stringify(err, Object.getOwnPropertyNames(err), 2)
    console.log(JSON.parse(errJson))
  }
};

log

// vue省略
// Vue.config.ignoredElements = [
//   'app',
//   // 用一个 `RegExp` 忽略所有“ion-”开头的元素
//   // 仅在 2.5+ 支持
//   /^app-/
// ]

// vue性能优化 https://juejin.cn/post/6844903651262070791#heading-0
Vue.config.performance = true;

// 初始化Vue实例
new Vue({
  render: h => h(Parent), // 执行App.vue组件
  router,
}).$mount('#app') // 挂载到index.html页面中的id="app"

