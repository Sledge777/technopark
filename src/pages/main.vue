<template>
  <the-header/>
  <selector/>
</template>
<script>
import TheHeader from '@/src/../components/TheHeader.vue'
import Selector from '@/src/../components/Selector.vue'
export default {
  components: {
    TheHeader,Selector
  },
}
</script>
<style scoped>
body {
  background-color: black;
}
</style>