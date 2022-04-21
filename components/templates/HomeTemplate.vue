<template>
  <div class="home-template">
    <PageTitle text="Bem-vindo ao " strong="iBook"></PageTitle>
    <Releases />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HomeTemplate'
  })
</script>

<style lang="scss" scoped>
.home-template {
  display: grid;
  grid-gap: 4rem;
}
</style>
