<template>
  <div id="app">
    <router-view></router-view>
    <div id="mount-point"></div>
    <app />
  </div>
</template>

<script>
import Vue from 'vue' // 导入Vue的核心包


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