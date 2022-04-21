<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books  } from "@/store";

// Vai herdar de Layout
export default Vue.extend({
  name: 'IndexPage',
  layout: 'ibook',
  asyncData() {
    console.log(books.books)
  }
})
</script>
