<template>
  <div id="app">
    <router-view></router-view>
    <div id="mount-point"></div>
    <app />
  </div>
</template>

<script>

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
  created(){
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
  }

}

</script>