<template>
  <div id="app">
    <button @click="$msg.show({ type: 'success' });">success</button>
    <button @click="$msg.show({ type: 'primany' });">primany</button>
    <button @click="$msg.show({ type: 'error' });">error</button>
    <button @click="$msg.show({ type: 'error' });">info</button>
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

  },
  created() {

  }

}

</script>