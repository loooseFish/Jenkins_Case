<template>
  <div id="app">
    <router-view></router-view>
    <div id="mount-point"></div>
    <app />
  </div>
</template>



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