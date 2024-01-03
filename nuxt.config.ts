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
        baseUrl: 'http://localhost:3000',
        sessionKey: process.env.SESSION_SECRET_KEY,
        tokenKey: process.env.TOKEN_SECRET_KEY,
        stripePaymentSubscriber: process.env.STRIPE_PAYEMENT_SUSCRIBER,
        stripePaymentSubscriberReduction: process.env.STRIPE_PAYEMENT_SUSCRIBER_REDUCTION,
        stripePaymentBasic: process.env.STRIPE_PAYEMENT_BASIC,
        stripePaymentDuo: process.env.STRIPE_PAYEMENT_DUO,
        stripe: {
            secretKey: process.env.STRIPE_SECRET_KEY,
        },
        public: {
            sessionKey: process.env.SESSION_SECRET_KEY,
            baseUrl: 'http://localhost:3000',
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    experimental: {
        writeEarlyHints: false,
    }

})
