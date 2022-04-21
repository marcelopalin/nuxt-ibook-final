<template>
  <div>
  <!-- <HomeTemplate /> -->
    <h1>{{ $count }}</h1>
    <button @click="increment">Incrementar</button>
  </div>
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
  },
  computed: {
    // Convenção vamos colocar nome da Computed o nome do Getter
    $count() {
      return books.$count // que é o Getter
    }
  },
  methods: {
    increment() {
      books.increment(1)
    }
  }
})
</script>
