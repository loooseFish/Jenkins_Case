import Vue from 'vue' // 导入Vue的核心包
import Parent from './App.vue'
import router from './router'

Vue.config.productionTip = false

const errorHandler = (err, vm, info) => {
	
}

Vue.config.errorHandler = function (err, vm, info) {
  // 错误处理逻辑
  console.log(123, err, vm, info);
};

// 初始化Vue实例
new Vue({
  render: h => h(Parent), // 执行App.vue组件
  router,
}).$mount('#app') // 挂载到index.html页面中的id="app"

