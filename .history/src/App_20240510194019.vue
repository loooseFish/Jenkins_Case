<template>
  <div id="app">
    <router-view></router-view>
    <app />
  </div>
</template>

<script>
import Vue from 'vue' // 导入Vue的核心包
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')

export default {
  data() {
    return {
      message: 'default',
    }
  },
  components: {

  },
  methods: {

  },

}

</script>