<template>
  <div id="app">
    <!-- <Toast /> -->
    <button @click="handclick()">oppo</button>
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
    // Toast
  },
  methods: {
    handclick() {
      showToast('hello world')
    }
  },

}

</script>