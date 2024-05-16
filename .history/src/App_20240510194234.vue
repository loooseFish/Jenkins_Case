<template>
  <div id="app">
    <router-view></router-view>
    <div id="mount-point"></div>
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