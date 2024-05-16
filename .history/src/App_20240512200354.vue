<template>
  <div id="app">
  </div>
</template>

<script>
import { messageBox } from './components'

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
    messageBox()
  }

}

</script>