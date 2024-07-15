// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-vue3-google-signin',
    '@pinia/nuxt'
  ],

  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },

  plugins: [
    '~/plugins/CartContext.js',
    '~/plugins/vue3-google-login.js'
  ],

  build: {
    transpile: ['vuex'],
  },

  compatibilityDate: '2024-07-15',
});