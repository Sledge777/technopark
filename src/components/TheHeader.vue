<template>
  <header>
    <base-logo>
        <header-refs class="header-refs"/>
    </base-logo>
  </header>
</template>

<script>
import HeaderRefs from '@/components/HeaderRefs.vue'
import BaseLogo from '@/components/BaseLogo.vue'
export default {
  components: {
    HeaderRefs,BaseLogo
  }
}
</script>

<style scoped>
header {
  width: 80%;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 50px;
}
.header-refs {
  margin-left: 3%;
  align-self: center;
}
</style>
