<template>
  <div class="about-template">
    <PageTitle text="O que é o " strong="iBook?"></PageTitle>
    <Presentation />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'AboutTemplate'
  })
</script>

<style lang="scss" scoped>
.about-template {
  display: grid;
  grid-gap: 4rem;
}
</style>
