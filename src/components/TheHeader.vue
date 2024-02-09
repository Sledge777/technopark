<template>
  <header>
    <base-logo/>
    <header-refs/>
    <auth/>
  </header>
</template>

<script>
import HeaderRefs from '@/components/HeaderRefs.vue'
import BaseLogo from '@/components/BaseLogo.vue'
import auth from '@/components/auth.vue'
export default {
  components: {
    HeaderRefs,BaseLogo,auth
  }
}
</script>

<style scoped>
header {
  width: 80%;
  margin: auto;
  padding-top: 1%;
  padding-bottom: 50px;
  display: flex;
}
</style>
