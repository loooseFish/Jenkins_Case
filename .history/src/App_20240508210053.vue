<template>
  <div id="app">
    <!-- <Toast /> -->
    <button @click="handclick()">oppo</button>
  </div>
</template>

<script>

// import Toast from "@/components/toast.vue";

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
      showToast('hello woold')
    }
  },

}

</script>