export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ibook',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Descrição do Site - SSR - Nuxt -Este é um site com NuxtJS'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{path: '@/components', pathPrefix: false}],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  styleResources: {
    // your settings here
    scss: ['@/components/bosons/*.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  axios: {
    baseURL: process.env.NOV_ENV === 'production' ? '' : 'http://localhost:3333'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Carrega o CSS em um arquivo diferente do código fonte
    extractCSS: true
  }
}
