import Providers from 'next-auth/providers';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-next-auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module'
  ],

  serverMiddleware: [{
    path: '/api/protected',
    handler: '~/api/index.js'
  }],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-next-auth/module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  privateRuntimeConfig: {},

  publicRuntimeConfig: {},

  nextAuth: {
    providers: [
      Providers.GitHub({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),
    ],
  }
}
