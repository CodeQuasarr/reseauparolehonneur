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
        mail:  {
            host: process.env.NUXT_MAILHOST,
            port: process.env.NUXT_MAILPORT,
            auth: {
                user: process.env.NUXT_MAILUSER,
                pass: process.env.NUXT_MAILPASS
            },
            contact: process.env.CONTACTEMAIL
        },
        baseUrl: 'http://localhost:3000',
        sessionKey: process.env.NUXT_SESSION_SECRET_KEY,
        tokenKey: process.env.NUXT_TOKEN_SECRET_KEY,
        stripePaymentSubscriber: process.env.NUXT_STRIPE_PAYEMENT_SUSCRIBER,
        stripePaymentSubscriberReduction: process.env.NUXT_STRIPE_PAYEMENT_SUSCRIBER_REDUCTION,
        stripePaymentBasic: process.env.NUXT_STRIPE_PAYEMENT_BASIC,
        stripePaymentDuo: process.env.NUXT_STRIPE_PAYEMENT_DUO,
        stripe: {
            secretKey: process.env.NUXT_STRIPE_SECRET_KEY,
        },
        public: {
            sessionKey: process.env.NUXT_SESSION_SECRET_KEY,
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
