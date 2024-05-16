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
  created() {
    var a = 1;
    function fn(a) {
      a = 2;

      console.log(a == a);
    }
    fn
  }

}

</script>