<template>
  <div class="footer">
    <Container>
      <Logo />
      <p>Copyright &copy; {{ currentYear }}</p>
    </Container>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear()
      }
    }
  })
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 110px;
  background: color(dark, darkest);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}
</style>
