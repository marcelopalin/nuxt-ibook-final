<template>
  <div>
    <HomeTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

// Vai herdar de Layout
export default Vue.extend({
  name: 'IndexPage',
  layout: 'ibook',
  /* Testando o módulo:
  (sendo esse módulo assíncrono para a página
  só ser exibida depois que os livros carregarem): */
  /** asyncData só está disponível para o componente Página
   * para acontecer do lado do servidor.
   * Se utilizar em qualquer outro componente acontecerá
   * do lado do Cliente.
   * Página = Gatilho para preencher o Vuex
   */
  async asyncData() {
    await books.index()
  }
})
</script>
