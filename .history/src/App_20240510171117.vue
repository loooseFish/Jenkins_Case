<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

Vue.config.errorHandler = function (err, vm, info) {
  // 错误处理逻辑
};


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