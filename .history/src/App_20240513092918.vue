<template>
  <div id="app">
    <button @click="$msg.show({ type: 'success' });">success</button>
    <button @click="$msg.show({ type: 'primany' });">primany</button>
    <button @click="$msg.show({ type: 'error' });">error</button>
    <button @click="$msg.show({ type: 'info' });">info</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6]
    }
  },
  components: {
  },
  methods: {

  },
  created() {

  },
  render(createEle) {
    return createEle('ul', {}, this.number.map(item => createEle('li', {}, `${item}`)))
  },

}

</script>