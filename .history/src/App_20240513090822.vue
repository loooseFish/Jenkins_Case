<template>
  <div id="app">
    <button>success</button>
    <button @click="showP">primany</button>
    <button>error</button>
    <button>info</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    showP() {
      this.$msg.show({ type: 'primany' });
    }
  },
  created() {

  }

}

</script>