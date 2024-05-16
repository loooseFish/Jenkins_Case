<template>
  <div id="app">
    <!-- <Toast /> -->
    <button @click="handclick()">oppo</button>
  </div>
</template>

<script>

// import Toast from "@/components/toast.vue";
import { showToast } from './components/toast';

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