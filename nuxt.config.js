export default {
  target: 'server',
  ssr: true,

  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'k-menus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'k-menu', name: 'k-menu', content: 'Aplicación para crear Menús' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {},

  build: {
  },
  tailwindcss: {
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  }
}
