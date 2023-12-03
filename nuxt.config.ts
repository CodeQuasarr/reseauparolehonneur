// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@vueuse/motion/nuxt'
  ],
  runtimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    sessionKey: process.env.SESSION_SECRET_KEY,
    tokenKey: process.env.TOKEN_SECRET_KEY,
    public: {
      sessionKey: process.env.SESSION_SECRET_KEY,
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
