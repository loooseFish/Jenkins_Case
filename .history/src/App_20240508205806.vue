<template>
  <div id="app">
    <Toast />
    <button @click="">{{ message }}</button>
  </div>
</template>

<script>

import Toast from "@/components/toast.vue";

export default {
  data() {
    return {
      message: 'default',

    }
  },
  components: {
    Toast
  },
  methods: {

  },

}

</script>